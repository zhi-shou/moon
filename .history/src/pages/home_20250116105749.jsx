import React, { useState, useEffect } from 'react';
import { wordBank, LearningProgress } from '../data';
import {
  WordCard,
  StatsMini,
  Stats,
  Phonetic,
  Translation,
  Example,
  ExampleTranslation,
  ButtonGroup,
  DifficultButton,
  LearningButton,
  MasteredButton,
  ShowButton
} from './home.styles';

function Home() {
  const [currentWord, setCurrentWord] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [stats, setStats] = useState(null);
  const userId = '1';
  
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
      <WordCard>
        <h2>今日学习完成！</h2>
        <Stats>
          <p>已掌握: {stats?.learned || 0} 个单词</p>
          <p>学习中: {stats?.learning || 0} 个单词</p>
          <p>困难词: {stats?.difficult || 0} 个单词</p>
        </Stats>
      </WordCard>
    );
  }

  return (
    <WordCard>
      <StatsMini>
        <span>已掌握: {stats?.learned || 0}</span>
      </StatsMini>
      
      <h2>{currentWord.word}</h2>
      <Phonetic>{currentWord.phonetic}</Phonetic>
      
      {showTranslation ? (
        <>
          <Translation>{currentWord.translation}</Translation>
          <Example>{currentWord.example}</Example>
          <ExampleTranslation>{currentWord.exampleTranslation}</ExampleTranslation>
          
          <ButtonGroup>
            <DifficultButton onClick={() => handleWordStatus('difficult')}>
              困难
            </DifficultButton>
            <LearningButton onClick={() => handleWordStatus('learning')}>
              认识
            </LearningButton>
            <MasteredButton onClick={() => handleWordStatus('mastered')}>
              已掌握
            </MasteredButton>
          </ButtonGroup>
        </>
      ) : (
        <ShowButton onClick={() => setShowTranslation(true)}>
          显示释义
        </ShowButton>
      )}
    </WordCard>
  );
}

export default Home;
