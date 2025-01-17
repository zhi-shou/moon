import React, { useState, useEffect } from 'react';
import { styles } from './home.styles.js';

const Home = () => {
  const [selectedBuilding, setSelectedBuilding] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [error, setError] = useState('');
  
  const buildings = Array.from({ length: 10 }, (_, i) => i + 1);
  const numbers = Array.from({ length: 10 }, (_, i) => i);

  useEffect(() => {
    const generateSignature = (nonceStr, timestamp, url) => {
      return 'generated_signature';
    };

    const initWxConfig = () => {
      const nonceStr = 'nonceStr_' + Math.random().toString(36).substr(2);
      const timestamp = String(Math.floor(Date.now() / 1000));
      
      // 使用完整的网络地址
      const currentUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;
      console.log('Current URL:', currentUrl);

      const wxConfig = {
        debug: true,
        appId: 'wx2d34c633c4e8df82',
        timestamp: timestamp,
        nonceStr: nonceStr,
        signature: generateSignature(nonceStr, timestamp, currentUrl),
        jsApiList: [
          'updateAppMessageShareData',
          'updateTimelineShareData',
          'onMenuShareTimeline',
          'onMenuShareAppMessage'
        ]
      };

      if (typeof wx !== 'undefined') {
        wx.config(wxConfig);
        
        wx.ready(() => {
          console.log('微信JS-SDK初始化成功');
          
          // 配置分享到朋友圈
          wx.updateTimelineShareData({ 
            title: '房号分享', 
            link: currentUrl, 
            imgUrl: '', 
            success: function () {
              console.log('配置分享到朋友圈成功');
            },
            fail: function(res) {
              console.error('配置分享到朋友圈失败:', res);
            }
          });

          // 配置分享给朋友
          wx.updateAppMessageShareData({ 
            title: '房号分享', 
            desc: '请查看我的房号', 
            link: currentUrl, 
            imgUrl: '', 
            success: function () {
              console.log('配置分享给朋友成功');
            },
            fail: function(res) {
              console.error('配置分享给朋友失败:', res);
            }
          });
        });

        wx.error((res) => {
          console.error('微信JS-SDK配置错误:', res);
          alert('微信配置错误，请查看控制台');
        });
      }
    };

    initWxConfig();
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
      // 更新分享内容
      wx.updateAppMessageShareData({ 
        title: '我的房号', 
        desc: `我的房号是: ${fullRoomNumber}`, 
        link: window.location.href.split('#')[0],
        imgUrl: '',
        success: function () {
          alert('分享设置已更新，请点击右上角菜单进行分享\n房号：' + fullRoomNumber);
        },
        fail: function(res) {
          console.error('更新分享内容失败:', res);
          alert('分享设置失败，请重试');
        }
      });
    } else {
      alert(`分享房号: ${fullRoomNumber}\n（当前环境不支持微信分享）`);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>选择房号</h2>
      
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
            {building}
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

      {error && <div style={styles.error}>{error}</div>}

      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={handleShare}>
          分享
        </button>

        <button 
          style={{...styles.button, ...styles.resetButton}} 
          onClick={handleBackspace}
        >
          退格
        </button>

        <button 
          style={{...styles.button, ...styles.resetButton}} 
          onClick={resetSelection}
        >
          重置
        </button>
      </div>
    </div>
  );
};

export default Home;
