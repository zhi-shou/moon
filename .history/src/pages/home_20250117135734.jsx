import React, { useState, useEffect } from 'react';
import { styles } from './home.styles.js';

const Home = () => {
  const [selectedBuilding, setSelectedBuilding] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [error, setError] = useState('');
  
  const buildings = Array.from({ length: 10 }, (_, i) => i + 1);
  const numbers = Array.from({ length: 10 }, (_, i) => i);

  useEffect(() => {
    const wxConfig = {
      debug: true,
      appId: '这里填入获取到的AppID',
      timestamp: String(Date.now()),
      nonceStr: 'randomString',
      signature: 'your_signature',
      jsApiList: [
        'updateAppMessageShareData',
        'updateTimelineShareData'
      ]
    };

    if (typeof wx !== 'undefined') {
      wx.config(wxConfig);
      
      wx.ready(() => {
        wx.updateTimelineShareData({ 
          title: '房号分享', 
          link: window.location.href, 
          imgUrl: '',
          success: function () {
            console.log('配置分享到朋友圈成功');
          }
        });

        wx.updateAppMessageShareData({ 
          title: '房号分享', 
          desc: '请查看我的房号', 
          link: window.location.href, 
          imgUrl: '',
          success: function () {
            console.log('配置分享给朋友成功');
          }
        });
      });

      wx.error((res) => {
        console.error('微信配置错误:', res);
      });
    }
  }, []);

  const handleBuildingClick = (building) => {
    setSelectedBuilding(building);
    setError('');
  };

  const handleNumberClick = (number) => {
    setRoomNumber(prev => prev + number);
    setError('');
  };

  const handleBackspace = () => {
    if (roomNumber.length > 0) {
      setRoomNumber(prev => prev.slice(0, -1));
    }
  };

  const resetSelection = () => {
    setSelectedBuilding('');
    setRoomNumber('');
    setError('');
  };

  const handleShare = () => {
    if (!selectedBuilding) {
      setError('请先选择楼栋');
      return;
    }
    if (!roomNumber) {
      setError('请输入房号');
      return;
    }

    const fullRoomNumber = `${selectedBuilding}#${roomNumber}`;
    
    if (typeof wx !== 'undefined') {
      alert('请点击右上角菜单进行分享\n房号：' + fullRoomNumber);
      
      wx.updateAppMessageShareData({ 
        title: '我的房号', 
        desc: `我的房号是: ${fullRoomNumber}`, 
        link: window.location.href,
        imgUrl: '',
        success: function () {
          console.log('分享内容更新成功');
        },
        fail: function() {
          console.log('分享内容更新失败');
          alert('分享设置失败，请重试');
        }
      });
    } else {
      alert(`分享房号: ${fullRoomNumber}\n（当前环境不支持微信分享）`);
    }
  };

  return (
    <div style={styles.container}>
      <h2>选择房号</h2>
      
      <div style={styles.buildingSection}>
        {buildings.map(building => (
          <div
            key={building}
            style={{
              ...styles.block,
              ...(selectedBuilding === building ? styles.selectedBlock : {})
            }}
            onClick={() => handleBuildingClick(building)}
          >
            {building}栋
          </div>
        ))}
      </div>

      <div style={styles.numberSection}>
        {numbers.map(number => (
          <div
            key={number}
            style={styles.block}
            onClick={() => handleNumberClick(number)}
          >
            {number}
          </div>
        ))}
      </div>

      <div style={styles.result}>
        {selectedBuilding && roomNumber ? `${selectedBuilding}#${roomNumber}` : '请选择房号'}
      </div>

      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}

      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={handleShare}>
          分享到微信
        </button>

        <button 
          style={{...styles.button, ...styles.resetButton}} 
          onClick={resetSelection}
        >
          重置
        </button>

        <button 
          style={{...styles.button, ...styles.resetButton}} 
          onClick={handleBackspace}
        >
          退格
        </button>
      </div>
    </div>
  );
};

export default Home;
