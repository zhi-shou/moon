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
  temperature: 1.3
});
function Home() {
  const [currentWord, setCurrentWord] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [stats, setStats] = useState(null);
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastWord, setLastWord] = useState(null);
  const [conversationHistory, setConversationHistory] = useState(null);
  const userId = '1';
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: `给我随机生成一个单词并以{
        id: 2,
        word: "book",
        phonetic: "/bʊk/",
        translation: "书",
        example: "I love reading books.",
        exampleTranslation: "我喜欢读书。",
        difficulty: 1,
        category: "education"
      }这种对象的格式返回，且单词不能重复`,
    }
  ]);

  const handleKeyPress = React.useCallback((event) => {
    if (event.key === 'Enter') {
      main();
      setShowTranslation(false);
    }
  }, []);
  
  useEffect(() => {
    main();
    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
  console.log(conversationHistory, 'conversationHistory');
  const main = React.useCallback(async () => {
    try {
      const completion = await openai.chat.completions.create({
        messages: messages,
        model: 'deepseek-chat',
      });

      const assistantMessage = completion.choices[0].message;

      setMessages(
        ...messages,
        {
          role: 'system',
          content: '继续生成下一个不同的单词'
        }
      );

      const jsonString = assistantMessage.content;
      const cleanJsonString = jsonString
        .replace(/^```json\n/, '')
        .replace(/\n```$/, '');
      const wordObject = JSON.parse(cleanJsonString);
      
      setCurrentWord(wordObject);
      setWords(prev => [...prev, wordObject]);
    } catch (error) {
      console.error('Error:', error);
    }
  }, [messages]);

  const loadNextWord = () => {
    
  };

  const updateStats = () => {
  };

  const handleWordStatus = (status) => {
  };

  if (!currentWord) {
    return (
      <WordCard>
        <h2>Ready!!!</h2>
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
