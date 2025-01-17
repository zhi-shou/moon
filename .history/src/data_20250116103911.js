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
  }
  // ... 更多单词
];

// 用户学习进度管理
export class LearningProgress {
  static saveProgress(userId, wordId, status) {
    const progress = JSON.parse(localStorage.getItem(`progress_${userId}`) || '{}');
    progress[wordId] = {
      status, // 'new', 'learning', 'mastered'
      lastReview: new Date().toISOString(),
      reviewCount: (progress[wordId]?.reviewCount || 0) + 1
    };
    localStorage.setItem(`progress_${userId}`, JSON.stringify(progress));
  }

  static getProgress(userId) {
    return JSON.parse(localStorage.getItem(`progress_${userId}`) || '{}');
  }
}
