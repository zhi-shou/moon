// 单词数据结构
export const wordBank = [
  {
    id: 1,
    word: "apple",
    phonetic: "/ˈæp.əl/",
    translation: "苹果",
    example: "I eat an apple every day.",
    exampleTranslation: "我每天吃一个苹果。",
    difficulty: 1,
    category: "fruit"
  },
  {
    id: 2,
    word: "book",
    phonetic: "/bʊk/",
    translation: "书",
    example: "I love reading books.",
    exampleTranslation: "我喜欢读书。",
    difficulty: 1,
    category: "education"
  },
  // 添加更多单词...
];

// 复习间隔（单位：小时）
const REVIEW_INTERVALS = {
  new: [1, 24, 72, 168, 360, 720], // 1小时, 1天, 3天, 7天, 15天, 30天
};

export class LearningProgress {
  static saveProgress(userId, wordId, status) {
    const progress = JSON.parse(localStorage.getItem(`progress_${userId}`) || '{}');
    const now = new Date();
    
    progress[wordId] = {
      status, // 'new', 'learning', 'difficult', 'mastered'
      lastReview: now.toISOString(),
      nextReview: this.calculateNextReview(now, status, progress[wordId]?.reviewCount || 0),
      reviewCount: (progress[wordId]?.reviewCount || 0) + 1
    };
    
    localStorage.setItem(`progress_${userId}`, JSON.stringify(progress));
  }

  static getProgress(userId) {
    return JSON.parse(localStorage.getItem(`progress_${userId}`) || '{}');
  }

  static calculateNextReview(now, status, reviewCount) {
    const intervals = REVIEW_INTERVALS[status] || REVIEW_INTERVALS.new;
    const intervalHours = intervals[Math.min(reviewCount, intervals.length - 1)];
    const nextReview = new Date(now);
    nextReview.setHours(nextReview.getHours() + intervalHours);
    return nextReview.toISOString();
  }

  static getDueWords(userId) {
    const progress = this.getProgress(userId);
    const now = new Date();
    
    return wordBank.filter(word => {
      const wordProgress = progress[word.id];
      if (!wordProgress) return true; // 新单词
      return true;
    });
  }

  static getStats(userId) {
    const progress = this.getProgress(userId);
    return {
      totalWords: wordBank.length,
      learned: Object.values(progress).filter(p => p.status === 'mastered').length,
      learning: Object.values(progress).filter(p => p.status === 'learning').length,
      difficult: Object.values(progress).filter(p => p.status === 'difficult').length
    };
  }
}
