import React, { useState, useEffect } from 'react';
import { styles } from './home.styles.js';

const ROOM_NUMBER_KEY = 'userRoomNumber';

const Home = () => {
  const [roomNumber, setRoomNumber] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  // 从本地存储加载房号
  useEffect(() => {
    const savedRoomNumber = localStorage.getItem(ROOM_NUMBER_KEY);
    if (savedRoomNumber) {
      setRoomNumber(savedRoomNumber);
    } else {
      setIsEditing(true);
    }
  }, []);

  const handleSave = () => {
    if (!inputValue.trim()) {
      setError('请输入房号');
      return;
    }

    setRoomNumber(inputValue.trim());
    localStorage.setItem(ROOM_NUMBER_KEY, inputValue.trim());
    setIsEditing(false);
    setError('');
  };

  const handleEdit = () => {
    setInputValue(roomNumber);
    setIsEditing(true);
  };

  const handleEnter = () => {
    window.location.hash = '#/circle';
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>欢迎光临!!</h2>

      <div style={styles.contentBox}>
        {!isEditing && roomNumber ? (
          <div style={styles.roomDisplay} onClick={handleEdit}>
            {roomNumber}
          </div>
        ) : (
          <div style={styles.inputContainer}>
            <input
              style={styles.input}
              type="text"
              placeholder="请输入房号"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {error && <div style={styles.error}>{error}</div>}
          </div>
        )}
      </div>

      <div style={styles.buttonContainer}>
        {isEditing ? (
          <button style={styles.button} onClick={handleSave}>
            保存
          </button>
        ) : roomNumber && (
          <button 
            style={styles.enterButton}
            onClick={handleEnter}
          >
            进来嗨
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
