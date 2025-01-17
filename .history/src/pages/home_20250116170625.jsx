import React, { useState, useEffect } from 'react';
import OpenAI from 'openai';
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
  ShowButton,
} from './home.styles';

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: 'sk-5eab8397c85e46468c61e6ac17ac8a97',
  dangerouslyAllowBrowser: true,
});
function Home() {
  const [currentWord, setCurrentWord] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [stats, setStats] = useState(null);
  const [words, setWords] = useState([]);
  const userId = '1';

  const handleKeyPress = React.useCallback((event) => {
    console.log('Key pressed:', event.key);
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
      main();
      setShowTranslation(false);
    }
  }, []);

  useEffect(() => {
    console.log('Adding event listener');
    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      console.log('Removing event listener');
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  async function main() {
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: `给我生成一个不重复的单词并以{
              id: 2,
              word: "book",
              phonetic: "/bʊk/",
              translation: "书",
              example: "I love reading books.",
              exampleTranslation: "我喜欢读书。",
              difficulty: 1,
              category: "education"
            }这种对象的格式返回`,
          },
        ],
        model: 'deepseek-chat',
      });
      
      const jsonString = completion.choices[0].message.content;
      const cleanJsonString = jsonString
        .replace(/^```json\n/, '')
        .replace(/\n```$/, '');

      const wordObject = JSON.parse(cleanJsonString);
      
      if (wordObject && typeof wordObject === 'object') {
        setCurrentWord(wordObject);
        setWords(prev => [...prev, wordObject]);
      }
    } catch (error) {
      console.error('Error fetching word:', error);
      // 可以添加错误处理UI
    }
  }

  const loadNextWord = () => {
    
  };

  const updateStats = () => {
  };

  const handleWordStatus = (status) => {
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
        <span>已掌握: {words?.length || 0}</span>
      </StatsMini>

      <h2>{currentWord.word}</h2>
      <Phonetic>{currentWord.phonetic}</Phonetic>
      <Translation>{currentWord.translation}</Translation>
      <Example>{currentWord.example}</Example>
      <ExampleTranslation>{currentWord.exampleTranslation}</ExampleTranslation>
    </WordCard>
  );
}

export default Home;
