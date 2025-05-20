'use client';

import { useState, useEffect, useRef, ChangeEvent, useCallback } from 'react';
import { Utils } from '@/utils';

const { randomWithin } = Utils;

/**
 * 猜数字游戏组件
 * @param max 随机数的最大范围
 */
const GuessNumber = ({ max }: { max: number }) => {
  // === 状态管理 ===
  // 目标数字：需要猜测的随机数
  const [targetNumber, setTargetNumber] = useState<number>(0);
  // 当前猜测值：用户输入的猜测数字，初始值设为最大值的一半
  const [guess, setGuess] = useState<number>(Math.floor(max / 2));
  // 最小值：猜测范围的下限，初始为1
  const [minValue, setMinValue] = useState<number>(1);
  // 最大值：猜测范围的上限，初始为传入的max
  const [maxValue, setMaxValue] = useState<number>(max);
  // 是否已猜中
  const [hasWon, setHasWon] = useState<boolean>(false);
  // 输入框的引用，用于操作DOM
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * 初始化游戏状态
   * 重置范围、目标数字和游戏状态
   */
  const initializeGame = useCallback(() => {
    // 重置最小值为1
    setMinValue(1);
    // 重置最大值为传入的max
    setMaxValue(max);
    // 重置猜测值为最大值的一半
    setGuess(Math.floor(max / 2));
    // 生成新的目标数字 (randomWithin生成0到max-1的数，所以需要+1)
    setTargetNumber(randomWithin(max) + 1);
    // 重置游戏状态
    setHasWon(false);
  }, [max]);

  /**
   * 进入页面初始化游戏
   */
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  /**
   * 处理输入框值变化
   * @param e 输入事件对象
   */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 将输入转换为整数，如果转换失败则使用最小值
    setGuess(parseInt(value) || minValue);
  };

  /**
   * 处理输入框失焦事件
   * 确保输入值是整数且在有效范围内
   */
  const handleInputBlur = () => {
    // 确保输入的是整数（使用Math.floor取整）
    let newGuess = Math.floor(guess);

    // 确保猜测值不小于当前最小值
    if (newGuess < minValue) {
      newGuess = minValue;
    }
    // 确保猜测值不大于当前最大值
    else if (newGuess > maxValue) {
      newGuess = maxValue;
    }

    // 更新猜测值为处理后的合法值
    setGuess(newGuess);
  };

  /**
   * 处理"猜测"按钮点击事件
   * 比较猜测值和目标数字，更新游戏状态
   */
  const handleGuess = () => {
    if (guess === targetNumber) {
      // 猜中：设置胜利状态
      setHasWon(true);
    } else if (guess < targetNumber) {
      // 猜小了：更新最小值为当前猜测值，缩小猜测范围
      setMinValue(guess);
    } else {
      // 猜大了：更新最大值为当前猜测值，缩小猜测范围
      setMaxValue(guess);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto p-6 bg-[#23272b] border border-gray-700 rounded-lg shadow-lg">
      {/* 标题：显示猜数字范围 */}
      <h1 className="text-3xl font-bold mb-8 text-center text-white">
        Guess a number between 1 and {max}
      </h1>

      {/* 条件渲染：根据是否猜中显示不同内容 */}
      {hasWon ? (
        // 已猜中：显示胜利信息
        <div className="flex flex-col items-center">
          <div className="text-6xl font-bold mb-4">🎉</div>
          <div className="text-2xl font-bold text-green-400 mb-2 font-zqk">You got it!</div>
          <div className="text-4xl font-bold text-white mt-4">{targetNumber}</div>
        </div>
      ) : (
        // 未猜中：显示猜测界面
        <>
          {/* 猜测区域：显示当前范围和输入框 */}
          <div className="flex items-center justify-center w-full mb-6">
            {/* 最小值 */}
            <span className="text-xl font-medium text-gray-300">{minValue}</span>
            <span className="mx-2 text-xl text-gray-300">≤</span>

            {/* 猜测输入框 */}
            <input
              ref={inputRef}
              type="number"
              value={guess}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className="w-24 h-16 text-center text-2xl font-bold mx-2 bg-gray-800 text-white border-2 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* 最大值 */}
            <span className="mx-2 text-xl text-gray-300">≤</span>
            <span className="text-xl font-medium text-gray-300">{maxValue}</span>
          </div>

          {/* 猜测按钮 */}
          <button
            onClick={handleGuess}
            className="px-8 py-4 text-xl font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
          >
            Guess
          </button>
        </>
      )}

      {/* 重新开始按钮 */}
      <button
        onClick={initializeGame}
        className="mt-8 px-6 py-3 text-lg font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors"
      >
        Restart Game
      </button>
    </div>
  );
};

export default GuessNumber;
