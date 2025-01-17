// 导入必要的React hooks
import { useState, useEffect, useCallback } from 'react';

// 游戏配置常量
const GRID_SIZE = 20;  // 网格大小为20x20
const CELL_SIZE = 20;  // 每个单元格的像素大小
const INITIAL_SNAKE = [{ x: 10, y: 10 }];  // 蛇的初始位置
const INITIAL_FOOD = { x: 15, y: 15 };     // 食物的初始位置
const INITIAL_DIRECTION = 'RIGHT';          // 蛇的初始移动方向
const SPEED = 150;                         // 游戏速度(毫秒)

export default function Home() {
  // 游戏状态管理
  const [snake, setSnake] = useState(INITIAL_SNAKE);           // 蛇的位置数组
  const [food, setFood] = useState(INITIAL_FOOD);              // 食物的位置
  const [direction, setDirection] = useState(INITIAL_DIRECTION);// 移动方向
  const [isPlaying, setIsPlaying] = useState(false);          // 游戏是否进行中
  const [score, setScore] = useState(0);                      // 游戏分数

  // 生成新的食物位置
  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
    setFood(newFood);
  }, []);

  // 重置游戏状态
  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setScore(0);
    generateFood();
    setIsPlaying(false);
  };

  // 移动蛇的逻辑
  const moveSnake = useCallback(() => {
    if (!isPlaying) return;

    setSnake(prevSnake => {
      const head = prevSnake[0];
      const newHead = { ...head };

      // 根据方向更新蛇头位置
      switch (direction) {
        case 'UP':
          newHead.y = (newHead.y - 1 + GRID_SIZE) % GRID_SIZE;  // 向上移动并处理边界
          break;
        case 'DOWN':
          newHead.y = (newHead.y + 1) % GRID_SIZE;              // 向下移动并处理边界
          break;
        case 'LEFT':
          newHead.x = (newHead.x - 1 + GRID_SIZE) % GRID_SIZE;  // 向左移动并处理边界
          break;
        case 'RIGHT':
          newHead.x = (newHead.x + 1) % GRID_SIZE;              // 向右移动并处理边界
          break;
      }

      // 检查是否吃到食物
      if (newHead.x === food.x && newHead.y === food.y) {
        generateFood();
        setScore(prev => prev + 10);  // 增加分数
        return [newHead, ...prevSnake];// 蛇身增长
      }

      // 检查是否撞到自己
      if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        resetGame();
        return INITIAL_SNAKE;
      }

      // 正常移动，保持长度不变
      return [newHead, ...prevSnake.slice(0, -1)];
    });
  }, [direction, food, generateFood, isPlaying]);

  // 键盘控制事件监听
  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');     // 防止直接反向
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');     // 防止直接反向
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');  // 防止直接反向
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');  // 防止直接反向
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction]);

  // 游戏主循环
  useEffect(() => {
    const gameInterval = setInterval(moveSnake, SPEED);
    return () => clearInterval(gameInterval);
  }, [moveSnake]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      {/* 控制按钮和分数显示 */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => setIsPlaying(true)}>开始</button>
        <button onClick={() => setIsPlaying(false)}>暂停</button>
        <button onClick={resetGame}>重置</button>
        <div>分数: {score}</div>
      </div>
      
      {/* 游戏网格 */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
          border: '1px solid #ccc'
        }}
      >
        {/* 渲染网格单元格 */}
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
          const x = index % GRID_SIZE;
          const y = Math.floor(index / GRID_SIZE);
          const isSnake = snake.some(segment => segment.x === x && segment.y === y);
          const isFood = food.x === x && food.y === y;
          
          return (
            <div
              key={index}
              style={{
                width: CELL_SIZE,
                height: CELL_SIZE,
                backgroundColor: isSnake ? '#4CAF50' : isFood ? '#FF5722' : 'white',
                border: '1px solid #eee'
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
