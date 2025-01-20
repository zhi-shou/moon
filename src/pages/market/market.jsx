import React, { useState } from 'react';
import { styles } from './market.styles.js';

const Market = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showPostModal, setShowPostModal] = useState(false);

  const categories = [
    { id: 'all', name: '全部', icon: '🏠' },
    { id: 'furniture', name: '家具家电', icon: '🛋️' },
    { id: 'digital', name: '数码产品', icon: '📱' },
    { id: 'clothing', name: '服饰箱包', icon: '👔' },
    { id: 'books', name: '图书文具', icon: '📚' },
    { id: 'others', name: '其他', icon: '🎁' }
  ];

  const items = [
    {
      id: 1,
      title: '9成新 iPhone 13',
      category: 'digital',
      price: 3999,
      originalPrice: 5999,
      images: ['iphone.jpg'],
      description: '去年买的，一直有套保护壳，无磕碰，电池健康度95%',
      condition: '95新',
      seller: {
        name: '数码达人',
        avatar: '👨‍💻',
        room: '1栋2单元303',
        rating: 4.8
      },
      createTime: '10分钟前',
      views: 68,
      likes: 12,
      tags: ['数码', '手机', 'iPhone']
    },
    {
      id: 2,
      title: '实木书桌+人体工学椅',
      category: 'furniture',
      price: 800,
      originalPrice: 2000,
      images: ['desk.jpg', 'chair.jpg'],
      description: '搬家急售，书桌1.4米，带抽屉，椅子是网易严选的，都是去年买的',
      condition: '95新',
      seller: {
        name: '家具控',
        avatar: '🪑',
        room: '2栋1单元1001',
        rating: 4.9
      },
      createTime: '2小时前',
      views: 156,
      likes: 23,
      tags: ['家具', '书桌', '椅子']
    }
  ];

  const filteredItems = items.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  );

  const handleContact = (itemId) => {
    console.log('联系卖家:', itemId);
    // 处理联系卖家的逻辑
  };

  const handleLike = (itemId) => {
    console.log('收藏商品:', itemId);
    // 处理收藏的逻辑
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>二手市场</h1>
        <button 
          style={styles.postButton}
          onClick={() => setShowPostModal(true)}
        >
          发布商品
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

      <div style={styles.itemGrid}>
        {filteredItems.map(item => (
          <div key={item.id} style={styles.itemCard}>
            <div style={styles.imageContainer}>
              <div style={styles.condition}>{item.condition}</div>
              <div style={styles.image} />
            </div>

            <div style={styles.itemContent}>
              <h3 style={styles.itemTitle}>{item.title}</h3>
              
              <div style={styles.priceRow}>
                <div style={styles.price}>
                  <span style={styles.currency}>¥</span>
                  {item.price}
                </div>
                <div style={styles.originalPrice}>¥{item.originalPrice}</div>
              </div>

              <p style={styles.description}>{item.description}</p>

              <div style={styles.tags}>
                {item.tags.map((tag, index) => (
                  <span key={index} style={styles.tag}>{tag}</span>
                ))}
              </div>

              <div style={styles.sellerInfo}>
                <div style={styles.sellerLeft}>
                  <span style={styles.avatar}>{item.seller.avatar}</span>
                  <div style={styles.sellerText}>
                    <span style={styles.sellerName}>{item.seller.name}</span>
                    <span style={styles.sellerRoom}>{item.seller.room}</span>
                  </div>
                </div>
                <div style={styles.rating}>⭐ {item.seller.rating}</div>
              </div>

              <div style={styles.itemFooter}>
                <div style={styles.itemMeta}>
                  <span>👁️ {item.views}</span>
                  <span>❤️ {item.likes}</span>
                  <span style={styles.time}>{item.createTime}</span>
                </div>
                <div style={styles.actions}>
                  <button 
                    style={styles.likeButton}
                    onClick={() => handleLike(item.id)}
                  >
                    收藏
                  </button>
                  <button 
                    style={styles.contactButton}
                    onClick={() => handleContact(item.id)}
                  >
                    联系卖家
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showPostModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2 style={styles.modalTitle}>发布商品</h2>
            {/* 这里添加发布商品的表单 */}
            <button 
              style={styles.closeButton}
              onClick={() => setShowPostModal(false)}
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Market; 