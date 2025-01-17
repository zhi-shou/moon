import React, { useState, useEffect } from 'react';
import { wordBank, LearningProgress } from '../data';

function Home() {
  const [currentWord, setCurrentWord] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);
  
  useEffect(() => {
    // 获取下一个要学习的单词
    const getNextWord = () => {
      const progress = LearningProgress.getProgress(userId);
      const newWord = wordBank.find(word => !progress[word.id]);
      setCurrentWord(newWord);
    };
    
    getNextWord();
  }, []);

  return (
    <div className="word-card">
      <h2>{currentWord?.word}</h2>
      <p className="phonetic">{currentWord?.phonetic}</p>
      
      {showTranslation ? (
        <>
          <p className="translation">{currentWord?.translation}</p>
          <p className="example">{currentWord?.example}</p>
          <p className="example-translation">{currentWord?.exampleTranslation}</p>
        </>
      ) : (
        <button onClick={() => setShowTranslation(true)}>
          显示释义
        </button>
      )}
      
      <div className="learning-buttons">
        <button onClick={() => handleDifficult()}>困难</button>
        <button onClick={() => handleKnown()}>认识</button>
        <button onClick={() => handleMastered()}>已掌握</button>
      </div>
    </div>
  );
}

export default Home;
