import React, { useState } from 'react';
import { styles } from './home.styles.js';

const Home = () => {
  const [selectedBuilding, setSelectedBuilding] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  
  const buildings = Array.from({ length: 10 }, (_, i) => i + 1);
  const numbers = Array.from({ length: 10 }, (_, i) => i);

  const handleBuildingClick = (building) => {
    setSelectedBuilding(building);
  };

  const handleNumberClick = (number) => {
    if (roomNumber.length < 4) {
      setRoomNumber(prev => prev + number);
    }
  };

  const resetSelection = () => {
    setSelectedBuilding('');
    setRoomNumber('');
  };

  const handleShare = () => {
    // 这里添加微信分享的逻辑
    const fullRoomNumber = `${selectedBuilding}#${roomNumber}`;
    // 调用微信SDK分享接口
    alert(`分享房号: ${fullRoomNumber}`);
  };

  return (
    <div style={styles.container}>
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

      <button style={styles.button} onClick={handleShare}>
        分享到微信
      </button>

      <button style={styles.button} onClick={resetSelection}>
        重置
      </button>
    </div>
  );
};

export default Home;
