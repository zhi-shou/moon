import React, { useState } from 'react';
import { styles } from './activities.styles.js';

const Activities = () => {
  const [activeTab, setActiveTab] = useState('ongoing');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const activities = [
    {
      id: 1,
      title: '社区运动会',
      type: 'sports',
      status: 'ongoing',
      date: '2024-03-20',
      time: '09:00-17:00',
      location: '小区运动场',
      organizer: '业主委员会',
      participants: 45,
      maxParticipants: 100,
      description: '春季社区运动会，项目包括：跑步、跳绳、乒乓球等，欢迎大家参与！',
      image: 'sports.jpg',
      tags: ['运动', '全家活动', '免费']
    },
    {
      id: 2,
      title: '插花艺术课',
      type: 'culture',
      status: 'upcoming',
      date: '2024-03-25',
      time: '14:00-16:00',
      location: '社区活动室',
      organizer: '文化小组',
      participants: 12,
      maxParticipants: 20,
      description: '专业花艺师教学，提供插花工具和鲜花，收费50元/人',
      image: 'flower.jpg',
      tags: ['艺术', '收费', '需预约']
    },
    {
      id: 3,
      title: '亲子故事会',
      type: 'family',
      status: 'ongoing',
      date: '每周六',
      time: '10:00-11:30',
      location: '图书室',
      organizer: '亲子活动组',
      participants: 15,
      maxParticipants: 30,
      description: '专业老师带领孩子们读绘本，进行互动游戏，适合3-8岁孩子',
      image: 'story.jpg',
      tags: ['亲子', '定期活动', '免费']
    }
  ];

  const tabs = [
    { id: 'ongoing', name: '进行中', icon: '🎯' },
    { id: 'upcoming', name: '即将开始', icon: '📅' },
    { id: 'my', name: '我的活动', icon: '👤' }
  ];

  const filteredActivities = activities.filter(activity => {
    if (activeTab === 'my') {
      return false; // 这里可以添加判断用户是否参与的逻辑
    }
    return activity.status === activeTab;
  });

  const handleJoin = (activityId) => {
    console.log('参加活动:', activityId);
    // 处理参加活动的逻辑
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>活动组织</h1>
        <button 
          style={styles.createButton}
          onClick={() => setShowCreateModal(true)}
        >
          发起活动
        </button>
      </div>

      <div style={styles.tabs}>
        {tabs.map(tab => (
          <div
            key={tab.id}
            style={{
              ...styles.tab,
              ...(activeTab === tab.id ? styles.activeTab : {})
            }}
            onClick={() => setActiveTab(tab.id)}
          >
            <span style={styles.tabIcon}>{tab.icon}</span>
            {tab.name}
          </div>
        ))}
      </div>

      <div style={styles.activityGrid}>
        {filteredActivities.map(activity => (
          <div key={activity.id} style={styles.activityCard}>
            <div style={styles.activityImage}>
              <div style={styles.activityType}>{activity.type}</div>
            </div>
            
            <div style={styles.activityContent}>
              <h3 style={styles.activityTitle}>{activity.title}</h3>
              
              <div style={styles.activityTags}>
                {activity.tags.map((tag, index) => (
                  <span key={index} style={styles.tag}>{tag}</span>
                ))}
              </div>

              <div style={styles.activityInfo}>
                <p>🗓️ {activity.date}</p>
                <p>⏰ {activity.time}</p>
                <p>📍 {activity.location}</p>
                <p>👥 {activity.participants}/{activity.maxParticipants}人</p>
              </div>

              <p style={styles.activityDesc}>{activity.description}</p>

              <div style={styles.activityFooter}>
                <div style={styles.organizer}>
                  主办方：{activity.organizer}
                </div>
                <button 
                  style={styles.joinButton}
                  onClick={() => handleJoin(activity.id)}
                >
                  {activity.participants >= activity.maxParticipants ? '已满员' : '参加活动'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showCreateModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2 style={styles.modalTitle}>发起活动</h2>
            {/* 这里添加创建活动的表单 */}
            <button 
              style={styles.closeButton}
              onClick={() => setShowCreateModal(false)}
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activities; 