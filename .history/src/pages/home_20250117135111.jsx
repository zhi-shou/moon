import React, { useState } from 'react';
import { styles } from './home.styles.js';

const Home = () => {
  const [selectedBuilding, setSelectedBuilding] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [error, setError] = useState('');
  
  const buildings = Array.from({ length: 10 }, (_, i) => i + 1);
  const numbers = Array.from({ length: 10 }, (_, i) => i);

  const handleBuildingClick = (building) => {
    setSelectedBuilding(building);
    setError('');
  };

  const handleNumberClick = (number) => {
    if (roomNumber.length < 4) {
      setRoomNumber(prev => prev + number);
      setError('');
    }
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
    if (roomNumber.length !== 4) {
      setError('请输入4位房号');
      return;
    }

    const fullRoomNumber = `${selectedBuilding}#${roomNumber}`;
    
    // 这里添加微信分享的逻辑
    if (typeof wx !== 'undefined') {
      wx.ready(() => {
        wx.shareAppMessage({
          title: '我的房号',
          desc: `我的房号是: ${fullRoomNumber}`,
          link: window.location.href,
          success: function() {
            alert('分享成功！');
          },
          fail: function() {
            alert('分享失败，请重试');
          }
        });
      });
    } else {
      alert(`分享房号: ${fullRoomNumber}`);
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
      </div>
    </div>
  );
};

export default Home;
