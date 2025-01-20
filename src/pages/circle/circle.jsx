import React from 'react';
import { styles } from './circle.styles.js';

const Circle = () => {
  const modules = [
    {
      id: 'social',
      title: '邻里社交',
      icon: '👥',
      gradient: 'linear-gradient(135deg, #FF6B6B, #FFE66D)',
      items: [
        { name: '邻里圈', desc: '分享生活点滴' },
        { name: '兴趣小组', desc: '运动、读书、育儿' },
        { name: '活动组织', desc: '邻里聚会、节日活动' },
        { name: '互助问答', desc: '生活经验分享' }
      ]
    },
    {
      id: 'resource',
      title: '资源共享',
      icon: '🤝',
      gradient: 'linear-gradient(135deg, #4ECDC4, #556270)',
      items: [
        { name: '二手交易', desc: '闲置物品买卖' },
        { name: '技能共享', desc: '补习、维修服务' },
        { name: '拼车服务', desc: '上下班拼车' },
        { name: '团购服务', desc: '组织社区团购' }
      ]
    },
    {
      id: 'service',
      title: '便民服务',
      icon: '🏠',
      gradient: 'linear-gradient(135deg, #A8E6CF, #DCEDC1)',
      items: [
        { name: '快递代收', desc: '邻里互帮代收快递' },
        { name: '工具借用', desc: '电钻、梯子等工具共享' },
        { name: '临时停车', desc: '车位共享' },
        { name: '宠物照看', desc: '短期寄养服务' }
      ]
    },
    {
      id: 'info',
      title: '信息共享',
      icon: '📢',
      gradient: 'linear-gradient(135deg, #FFD93D, #FF6B6B)',
      items: [
        { name: '装修经验', desc: '装修公司推荐' },
        { name: '教育资源', desc: '周边学校信息' },
        { name: '美食推荐', desc: '周边餐厅点评' },
        { name: '房屋租售', desc: '业主直租信息' }
      ]
    },
    {
      id: 'security',
      title: '安全防范',
      icon: '🛡️',
      gradient: 'linear-gradient(135deg, #6C5B7B, #C06C84)',
      items: [
        { name: '可疑人员报警', desc: '社区安全维护' },
        { name: '防诈骗信息', desc: '预防电信诈骗' },
        { name: '紧急求助', desc: '紧急情况互助' },
        { name: '失物招领', desc: '失物招领信息' }
      ]
    },
    {
      id: 'help',
      title: '生活互助',
      icon: '❤️',
      gradient: 'linear-gradient(135deg, #F8B195, #F67280)',
      items: [
        { name: '老人关怀', desc: '帮助看护老人' },
        { name: '儿童照看', desc: '临时托管服务' },
        { name: '家政推荐', desc: '保洁维修服务' },
        { name: '搬家互助', desc: '邻里互帮搬家' }
      ]
    }
  ];

  const handleCardClick = (moduleId, itemName) => {
    if (moduleId === 'social') {
      if (itemName === '邻里圈') {
        window.location.hash = '#/moments';
      } else if (itemName === '兴趣小组') {
        window.location.hash = '#/groups';
      } else if (itemName === '活动组织') {
        window.location.hash = '#/activities';
      } else if (itemName === '互助问答') {
        window.location.hash = '#/qa';
      }
    } else if (moduleId === 'resource' && itemName === '二手交易') {
      window.location.hash = '#/market';
    }
    // ... 其他点击处理
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>邻里圈</h1>
      <div style={styles.grid}>
        {modules.map(module => (
          <div
            key={module.id}
            style={{
              ...styles.card,
              background: module.gradient
            }}
          >
            <div style={styles.cardHeader}>
              <span style={styles.icon}>{module.icon}</span>
              <h2 style={styles.moduleTitle}>{module.title}</h2>
            </div>
            <div style={styles.itemsContainer}>
              {module.items.map((item, index) => (
                <div
                  key={index}
                  style={styles.item}
                  onClick={() => handleCardClick(module.id, item.name)}
                >
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <p style={styles.itemDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Circle;
