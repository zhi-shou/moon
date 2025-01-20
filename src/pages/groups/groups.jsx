import React, { useState } from 'react';
import { styles } from './groups.styles.js';

const Groups = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchText, setSearchText] = useState('');

  const groups = [
    {
      id: 1,
      name: '晨跑团',
      category: 'sports',
      icon: '🏃‍♂️',
      members: 28,
      activeLevel: 'high',
      description: '每天早上6:30小区健步道集合，让运动成为习惯！',
      recentActivity: '明天早上有晨跑活动，欢迎新朋友加入～',
      tags: ['运动', '健康', '社交'],
      nextEvent: {
        title: '周末特别跑',
        time: '周六 6:30',
        location: '小区北门'
      }
    },
    {
      id: 2,
      name: '读书会',
      category: 'culture',
      icon: '📚',
      members: 42,
      activeLevel: 'medium',
      description: '每周末下午的充电时光，一起分享读书心得',
      recentActivity: '本周讨论《人类简史》第三章',
      tags: ['阅读', '分享', '学习'],
      nextEvent: {
        title: '读书分享会',
        time: '周日 14:00',
        location: '社区图书室'
      }
    },
    {
      id: 3,
      name: '棋牌室',
      category: 'entertainment',
      icon: '♟️',
      members: 35,
      activeLevel: 'high',
      description: '棋牌爱好者的天堂，象棋、麻将、桥牌应有尽有',
      recentActivity: '象棋友谊赛正在报名中',
      tags: ['娱乐', '交友', '棋牌'],
      nextEvent: {
        title: '象棋比赛',
        time: '周六 19:00',
        location: '活动室'
      }
    },
    {
      id: 4,
      name: '园艺组',
      category: 'lifestyle',
      icon: '🌺',
      members: 23,
      activeLevel: 'medium',
      description: '一起交流养花种菜的经验，让阳台变成小花园',
      recentActivity: '春季花卉养护交流',
      tags: ['园艺', '生活', '分享'],
      nextEvent: {
        title: '花艺课程',
        time: '周日 10:00',
        location: '休闲区'
      }
    },
    {
      id: 5,
      name: '亲子活动',
      category: 'family',
      icon: '👨‍👩‍👧‍👦',
      members: 56,
      activeLevel: 'high',
      description: '组织各类亲子活动，让孩子们一起快乐成长',
      recentActivity: '周末手工DIY活动',
      tags: ['亲子', '教育', '娱乐'],
      nextEvent: {
        title: '亲子手工',
        time: '周六 15:00',
        location: '儿童活动室'
      }
    }
  ];

  const categories = [
    { id: 'all', name: '全部', icon: '🏠' },
    { id: 'sports', name: '运动健身', icon: '💪' },
    { id: 'culture', name: '文化艺术', icon: '🎨' },
    { id: 'entertainment', name: '休闲娱乐', icon: '🎮' },
    { id: 'lifestyle', name: '生活方式', icon: '🌱' },
    { id: 'family', name: '亲子家庭', icon: '👶' }
  ];

  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchText.toLowerCase()) ||
      group.description.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = activeTab === 'all' || group.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  const handleJoinGroup = (groupId) => {
    console.log(`加入小组 ${groupId}`);
    // 处理加入小组逻辑
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>兴趣小组</h1>
        <button style={styles.createButton}>创建小组</button>
      </div>

      <div style={styles.search}>
        <input
          style={styles.searchInput}
          placeholder="搜索兴趣小组..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div style={styles.categories}>
        {categories.map(category => (
          <div
            key={category.id}
            style={{
              ...styles.category,
              ...(activeTab === category.id ? styles.activeCategory : {})
            }}
            onClick={() => setActiveTab(category.id)}
          >
            <span style={styles.categoryIcon}>{category.icon}</span>
            <span>{category.name}</span>
          </div>
        ))}
      </div>

      <div style={styles.groupGrid}>
        {filteredGroups.map(group => (
          <div key={group.id} style={styles.groupCard}>
            <div style={styles.groupHeader}>
              <span style={styles.groupIcon}>{group.icon}</span>
              <div style={styles.groupInfo}>
                <h3 style={styles.groupName}>{group.name}</h3>
                <div style={styles.groupMeta}>
                  <span>{group.members}人</span>
                  <span>活跃度: {
                    group.activeLevel === 'high' ? '🔥' :
                    group.activeLevel === 'medium' ? '⭐' : '💫'
                  }</span>
                </div>
              </div>
            </div>

            <p style={styles.groupDesc}>{group.description}</p>

            <div style={styles.tags}>
              {group.tags.map((tag, index) => (
                <span key={index} style={styles.tag}>{tag}</span>
              ))}
            </div>

            <div style={styles.nextEvent}>
              <h4 style={styles.eventTitle}>下次活动</h4>
              <div style={styles.eventInfo}>
                <p>📅 {group.nextEvent.title}</p>
                <p>⏰ {group.nextEvent.time}</p>
                <p>📍 {group.nextEvent.location}</p>
              </div>
            </div>

            <div style={styles.recentActivity}>
              <span style={styles.activityIcon}>📢</span>
              {group.recentActivity}
            </div>

            <button 
              style={styles.joinButton}
              onClick={() => handleJoinGroup(group.id)}
            >
              加入小组
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups; 