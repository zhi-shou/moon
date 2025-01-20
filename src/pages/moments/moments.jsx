import React, { useState } from 'react';
import { styles } from './moments.styles.js';

const Moments = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      avatar: '👨‍👩‍👧‍👦',
      userName: '快乐家庭123',
      roomNumber: '1栋2单元303',
      content: '今天在小区门口看到好多小朋友放风筝，天气真好！一起来玩啊～',
      images: ['kite1.jpg', 'kite2.jpg'],
      likes: 28,
      comments: [
        { user: '邻居小王', content: '我们也在那边，下次叫上我们！' },
        { user: '开心妈妈', content: '风筝在哪里买的呀？看着很漂亮' }
      ],
      time: '10分钟前',
      isLiked: false
    },
    {
      id: 2,
      avatar: '👨‍🌾',
      userName: '园艺达人',
      roomNumber: '2栋1单元502',
      content: '分享我家阳台的小菜园，今天的收获～欢迎大家来交流种植经验！',
      images: ['garden1.jpg'],
      likes: 45,
      comments: [
        { user: '绿手指', content: '请问这个是什么品种的番茄？' },
        { user: '阳台农场主', content: '求教浇水技巧！' }
      ],
      time: '30分钟前',
      isLiked: false
    },
    {
      id: 3,
      avatar: '👩‍🍳',
      userName: '美食爱好者',
      roomNumber: '3栋3单元1001',
      content: '自制的红烧肉，邻居们要不要来尝尝？可以交换美食哦！',
      images: ['food1.jpg', 'food2.jpg'],
      likes: 56,
      comments: [
        { user: '吃货一枚', content: '看起来太诱人了！我可以用我的糖醋排骨换吗？' }
      ],
      time: '1小时前',
      isLiked: false
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [activePost, setActivePost] = useState(null);

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  const handleComment = (postId) => {
    if (!newComment.trim()) return;
    
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, { user: '我', content: newComment }]
        };
      }
      return post;
    }));
    
    setNewComment('');
    setActivePost(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>邻里圈</h1>
        <button style={styles.postButton}>发动态</button>
      </div>

      <div style={styles.content}>
        {posts.map(post => (
          <div key={post.id} style={styles.post}>
            <div style={styles.postHeader}>
              <div style={styles.userInfo}>
                <span style={styles.avatar}>{post.avatar}</span>
                <div style={styles.userText}>
                  <div style={styles.userName}>{post.userName}</div>
                  <div style={styles.roomNumber}>{post.roomNumber}</div>
                </div>
              </div>
              <span style={styles.time}>{post.time}</span>
            </div>

            <div style={styles.postContent}>{post.content}</div>

            {post.images && post.images.length > 0 && (
              <div style={styles.imageGrid}>
                {post.images.map((image, index) => (
                  <div key={index} style={styles.imageContainer}>
                    <div style={styles.image} />
                  </div>
                ))}
              </div>
            )}

            <div style={styles.actions}>
              <div 
                style={{
                  ...styles.action,
                  color: post.isLiked ? '#ff4d4f' : '#666'
                }}
                onClick={() => handleLike(post.id)}
              >
                {post.isLiked ? '❤️' : '🤍'} {post.likes}
              </div>
              <div 
                style={styles.action}
                onClick={() => setActivePost(activePost === post.id ? null : post.id)}
              >
                💬 {post.comments.length}
              </div>
              <div style={styles.action}>🔗 分享</div>
            </div>

            <div style={styles.comments}>
              {post.comments.map((comment, index) => (
                <div key={index} style={styles.comment}>
                  <span style={styles.commentUser}>{comment.user}：</span>
                  <span style={styles.commentContent}>{comment.content}</span>
                </div>
              ))}
            </div>

            {activePost === post.id && (
              <div style={styles.commentInput}>
                <input
                  style={styles.input}
                  placeholder="说点什么..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button 
                  style={styles.sendButton}
                  onClick={() => handleComment(post.id)}
                >
                  发送
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moments; 