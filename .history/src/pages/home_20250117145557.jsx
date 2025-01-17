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

  const handleCancel = () => {
    if (roomNumber) {
      setIsEditing(false);
      setError('');
    }
  };

  const handleShare = () => {
    if (!roomNumber) {
      setError('请先设置房号');
      return;
    }

    if (typeof wx !== 'undefined') {
      wx.updateAppMessageShareData({ 
        title: '我的房号', 
        desc: `我的房号是: ${roomNumber}`, 
        link: window.location.href.split('#')[0],
        imgUrl: '',
        success: function () {
          alert('分享设置已更新，请点击右上角菜单进行分享\n房号：' + roomNumber);
        },
        fail: function(res) {
          console.error('更新分享内容失败:', res);
          alert('分享设置失败，请重试');
        }
      });
    } else {
      alert(`分享房号: ${roomNumber}\n（当前环境不支持微信分享）`);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>欢迎光临</h2>

      {!isEditing && roomNumber ? (
        <>
          <div style={styles.roomDisplay} onClick={handleEdit}>
            {roomNumber}
          </div>
          <div style={styles.buttonGroup}>
            <button style={styles.button} onClick={handleShare}>
              分享
            </button>
            <button 
              style={{...styles.button, ...styles.cancelButton}} 
              onClick={handleEdit}
            >
              修改
            </button>
          </div>
        </>
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

          <div style={styles.buttonGroup}>
            <button style={styles.button} onClick={handleSave}>
              保存
            </button>
            {roomNumber && (
              <button 
                style={{...styles.button, ...styles.cancelButton}} 
                onClick={handleCancel}
              >
                取消
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
