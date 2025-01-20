import React, { useState } from 'react';
import { styles } from './qa.styles.js';

const QA = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAskModal, setShowAskModal] = useState(false);

  const categories = [
    { id: 'all', name: '全部', icon: '🏠' },
    { id: 'life', name: '生活服务', icon: '🛠️' },
    { id: 'decoration', name: '装修经验', icon: '🏗️' },
    { id: 'parenting', name: '育儿交流', icon: '👶' },
    { id: 'property', name: '物业相关', icon: '🏢' },
    { id: 'other', name: '其他', icon: '💡' }
  ];

  const questions = [
    {
      id: 1,
      title: '有推荐的装修公司吗？想要简约风格',
      category: 'decoration',
      author: {
        name: '新家主人',
        avatar: '👤',
        room: '1栋1单元101'
      },
      content: '准备开始装修了，想要简约现代风格，预算30w左右，求推荐靠谱的装修公司！',
      images: ['decoration1.jpg'],
      createTime: '10分钟前',
      views: 56,
      answers: [
        {
          id: 1,
          author: {
            name: '装修达人',
            avatar: '👨‍🔧',
            room: '2栋2单元202'
          },
          content: '我去年找的XX装饰不错，设计师很专业，工期也控制得好。',
          createTime: '5分钟前',
          likes: 12
        }
      ],
      tags: ['装修', '简约风格', '装修公司']
    },
    {
      id: 2,
      title: '小区附近有推荐的幼儿园吗？',
      category: 'parenting',
      author: {
        name: '宝妈',
        avatar: '👩',
        room: '3栋2单元303'
      },
      content: '孩子马上要上幼儿园了，想了解下小区周边幼儿园的情况，求推荐！',
      createTime: '30分钟前',
      views: 128,
      answers: [
        {
          id: 1,
          author: {
            name: '经验妈妈',
            avatar: '👩‍👦',
            room: '5栋1单元502'
          },
          content: '阳光幼儿园不错，环境好，老师也很负责。',
          createTime: '20分钟前',
          likes: 15
        }
      ],
      tags: ['育儿', '幼儿园', '教育']
    }
  ];

  const filteredQuestions = questions.filter(q => 
    activeCategory === 'all' || q.category === activeCategory
  );

  const handleAnswer = (questionId) => {
    console.log('回答问题:', questionId);
    // 处理回答问题的逻辑
  };

  const handleLike = (questionId, answerId) => {
    console.log('点赞回答:', questionId, answerId);
    // 处理点赞的逻辑
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>互助问答</h1>
        <button 
          style={styles.askButton}
          onClick={() => setShowAskModal(true)}
        >
          我要提问
        </button>
      </div>

      <div style={styles.categories}>
        {categories.map(category => (
          <div
            key={category.id}
            style={{
              ...styles.category,
              ...(activeCategory === category.id ? styles.activeCategory : {})
            }}
            onClick={() => setActiveCategory(category.id)}
          >
            <span style={styles.categoryIcon}>{category.icon}</span>
            {category.name}
          </div>
        ))}
      </div>

      <div style={styles.questionList}>
        {filteredQuestions.map(question => (
          <div key={question.id} style={styles.questionCard}>
            <div style={styles.questionHeader}>
              <div style={styles.authorInfo}>
                <span style={styles.avatar}>{question.author.avatar}</span>
                <div style={styles.authorText}>
                  <span style={styles.authorName}>{question.author.name}</span>
                  <span style={styles.authorRoom}>{question.author.room}</span>
                </div>
              </div>
              <span style={styles.time}>{question.createTime}</span>
            </div>

            <h3 style={styles.questionTitle}>{question.title}</h3>
            <p style={styles.questionContent}>{question.content}</p>

            <div style={styles.tags}>
              {question.tags.map((tag, index) => (
                <span key={index} style={styles.tag}>{tag}</span>
              ))}
            </div>

            <div style={styles.questionMeta}>
              <span>👁️ {question.views} 浏览</span>
              <span>💬 {question.answers.length} 回答</span>
            </div>

            <div style={styles.answers}>
              {question.answers.map(answer => (
                <div key={answer.id} style={styles.answer}>
                  <div style={styles.answerHeader}>
                    <div style={styles.authorInfo}>
                      <span style={styles.avatar}>{answer.author.avatar}</span>
                      <div style={styles.authorText}>
                        <span style={styles.authorName}>{answer.author.name}</span>
                        <span style={styles.authorRoom}>{answer.author.room}</span>
                      </div>
                    </div>
                    <span style={styles.time}>{answer.createTime}</span>
                  </div>
                  <p style={styles.answerContent}>{answer.content}</p>
                  <div style={styles.answerActions}>
                    <button 
                      style={styles.likeButton}
                      onClick={() => handleLike(question.id, answer.id)}
                    >
                      👍 {answer.likes}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button 
              style={styles.answerButton}
              onClick={() => handleAnswer(question.id)}
            >
              写回答
            </button>
          </div>
        ))}
      </div>

      {showAskModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2 style={styles.modalTitle}>发布问题</h2>
            {/* 这里添加提问表单 */}
            <button 
              style={styles.closeButton}
              onClick={() => setShowAskModal(false)}
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QA; 