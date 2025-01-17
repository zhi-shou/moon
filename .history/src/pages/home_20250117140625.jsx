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
    
    // 本地开发测试时，使用原生分享API
    if (navigator.share) {
      navigator.share({
        title: '我的房号',
        text: `我的房号是: ${fullRoomNumber}`,
        url: window.location.href
      }).then(() => {
        console.log('分享成功');
      }).catch((error) => {
        console.log('分享失败:', error);
        // 降级处理：使用复制到剪贴板
        copyToClipboard(fullRoomNumber);
      });
    } else {
      // 如果不支持分享API，直接复制到剪贴板
      copyToClipboard(fullRoomNumber);
    }
  };

  const copyToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      alert(`房号 ${text} 已复制到剪贴板`);
    } catch (err) {
      alert('复制失败，请手动复制：' + text);
    }
    document.body.removeChild(textArea);
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
          分享/复制房号
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
