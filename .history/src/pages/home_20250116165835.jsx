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

  useEffect(() => {
    main();
    // 添加键盘事件监听
    window.addEventListener('keydown', handleKeyPress);
    // 清理函数
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  // 处理键盘事件
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      main();
    }
  };

  async function main() {
    const completion = await openai.chat.completions.create({
      messages: [
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
        },
      ],
      model: 'deepseek-chat',
    });
    const jsonString = completion.choices[0].message.content;

    // 移除开头的 ```json 和结尾的 ``` 
    const cleanJsonString = jsonString
      .replace(/^```json\n/, '')  // 移除开头的 ```json 和换行
      .replace(/\n```$/, '');     // 移除结尾的 ``` 和换行

    // 解析成对象
    const wordObject = JSON.parse(cleanJsonString);

    console.log(wordObject); // 现在可以访问对象的属性了
    setCurrentWord(wordObject);
    setWords([...words, wordObject]);
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
