import React, { useState, useEffect } from 'react';
import { wordBank, LearningProgress } from '../data';

function Home() {
  const [currentWord, setCurrentWord] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [stats, setStats] = useState(null);
  const userId = '1'; // 实际应用中应该从认证系统获取
  
  useEffect(() => {
    loadNextWord();
    updateStats();
  }, []);

  const loadNextWord = () => {
    const dueWords = LearningProgress.getDueWords(userId);
    if (dueWords.length > 0) {
      // 优先选择困难单词或按复习时间排序
      const nextWord = dueWords.sort((a, b) => {
        const progressA = LearningProgress.getProgress(userId)[a.id];
        const progressB = LearningProgress.getProgress(userId)[b.id];
        if (progressA?.status === 'difficult') return -1;
        if (progressB?.status === 'difficult') return 1;
        return 0;
      })[0];
      setCurrentWord(nextWord);
    } else {
      setCurrentWord(null); // 显示完成提示
    }
  };

  const updateStats = () => {
    setStats(LearningProgress.getStats(userId));
  };

  const handleWordStatus = (status) => {
    if (!currentWord) return;
    
    LearningProgress.saveProgress(userId, currentWord.id, status);
    setShowTranslation(false);
    loadNextWord();
    updateStats();
  };

  if (!currentWord) {
    return (
      <div className="word-card">
        <h2>今日学习完成！</h2>
        <div className="stats">
          <p>已掌握: {stats?.learned || 0} 个单词</p>
          <p>学习中: {stats?.learning || 0} 个单词</p>
          <p>困难词: {stats?.difficult || 0} 个单词</p>
        </div>
      </div>
    );
  }

  return (
    <div className="word-card">
      <div className="stats-mini">
        <span>已掌握: {stats?.learned || 0}</span>
      </div>
      
      <h2>{currentWord.word}</h2>
      <p className="phonetic">{currentWord.phonetic}</p>
      
      {showTranslation ? (
        <>
          <p className="translation">{currentWord.translation}</p>
          <p className="example">{currentWord.example}</p>
          <p className="example-translation">{currentWord.exampleTranslation}</p>
          
          <div className="learning-buttons">
            <button 
              className="difficult-btn"
              onClick={() => handleWordStatus('difficult')}
            >
              困难
            </button>
            <button 
              className="learning-btn"
              onClick={() => handleWordStatus('learning')}
            >
              认识
            </button>
            <button 
              className="mastered-btn"
              onClick={() => handleWordStatus('mastered')}
            >
              已掌握
            </button>
          </div>
        </>
      ) : (
        <button 
          className="show-btn"
          onClick={() => setShowTranslation(true)}
        >
          显示释义
        </button>
      )}
    </div>
  );
}

export default Home;
