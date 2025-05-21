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
  // 当前猜测值：用户输入的猜测数字，初始值为空
  const [userGuessValue, setUserGuessValue] = useState<number | null>(null);
  // 最小值：猜测范围的下限，初始为1
  const [minValue, setMinValue] = useState<number>(1);
  // 最大值：猜测范围的上限，初始为传入的max
  const [maxValue, setMaxValue] = useState<number>(max);
  // 是否已猜中
  const [hasWon, setHasWon] = useState<boolean>(false);
  // 猜测历史记录
  const [guessHistory, setGuessHistory] = useState<{ value: number; result: string }[]>([]);
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
    // 重置猜测值为空
    setUserGuessValue(null);
    // 生成新的目标数字 (randomWithin生成0到max-1的数，所以需要+1)
    setTargetNumber(randomWithin(max) + 1);
    // 重置游戏状态
    setHasWon(false);
    // 清空猜测历史记录
    setGuessHistory([]);
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

    // 当输入为空时，设置为null
    if (value === '') {
      setUserGuessValue(null);
      return;
    }

    // 将输入转换为整数，如果转换失败则使用最小值
    const parsedValue = parseInt(value);
    setUserGuessValue(parsedValue || minValue);
  };

  /**
   * 处理输入框失焦事件
   * 确保输入值是整数且在有效范围内
   */
  const handleInputBlur = () => {
    // 如果userGuessValue为null，保持为null
    if (userGuessValue === null) {
      return;
    }

    // 确保输入的是整数（使用Math.floor取整）
    let newGuess = Math.floor(userGuessValue);

    // 确保猜测值不小于当前最小值
    if (newGuess < minValue) {
      newGuess = minValue;
    }
    // 确保猜测值不大于当前最大值
    else if (newGuess > maxValue) {
      newGuess = maxValue;
    }

    // 更新猜测值为处理后的合法值
    setUserGuessValue(newGuess);
  };

  /**
   * 处理"猜测"按钮点击事件
   * 比较猜测值和目标数字，更新游戏状态
   */
  const handleGuess = () => {
    // 如果userGuessValue为null，不进行猜测
    if (userGuessValue === null) {
      return;
    }

    handleInputBlur();

    // 如果跟上一次的猜测值相同，则不进行处理
    if (userGuessValue === guessHistory[guessHistory.length - 1]?.value) {
      return;
    }

    let result = '';
    if (userGuessValue === targetNumber) {
      // 猜中：设置胜利状态
      setHasWon(true);
      result = 'Correct!';
    } else if (userGuessValue < targetNumber) {
      // 猜小了：更新最小值为当前猜测值，缩小猜测范围
      setMinValue(userGuessValue);
      result = 'Too low';
    } else {
      // 猜大了：更新最大值为当前猜测值，缩小猜测范围
      setMaxValue(userGuessValue);
      result = 'Too high';
    }

    // 添加到猜测历史记录
    setGuessHistory(prev => [...prev, { value: userGuessValue, result }]);
  };

  /**
   * 判断当前猜测值是否合法
   * 合法定义：整数、大于等于最小值、小于等于最大值、跟上一次猜测的数字不一样
   */
  const isValidGuess = useCallback(() => {
    // 如果没有输入值，返回false
    if (userGuessValue === null) {
      return false;
    }

    // 必须是整数
    if (!Number.isInteger(userGuessValue)) {
      return false;
    }

    // 必须在范围内
    if (userGuessValue < minValue || userGuessValue > maxValue) {
      return false;
    }

    // 不能与上一次猜测值相同
    const lastGuess = guessHistory.length > 0 ? guessHistory[guessHistory.length - 1].value : null;
    if (userGuessValue === lastGuess) {
      return false;
    }

    return true;
  }, [userGuessValue, minValue, maxValue, guessHistory]);

  /*
   * 界面内容
   */
  return (
    <div className="flex flex-col items-center justify-center w-full p-6 bg-[#23272b] border border-gray-700 rounded-lg shadow-lg">
      {/* 隐藏number类型输入框的步进器 */}
      <style jsx>{`
        /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Firefox */
        input[type='number'] {
          -moz-appearance: textfield;
        }

        /* 按钮样式 */
        .btn-confirm {
          cursor: pointer;
        }

        .btn-confirm:disabled {
          cursor: not-allowed;
          opacity: 0.5;
          background-color: #4a5568;
        }
      `}</style>

      {/* 标题：显示猜数字范围 */}
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center text-white">
        Guess a number between 1 and {max}
      </h1>

      {/* 条件渲染：根据是否猜中显示不同内容 */}
      {hasWon ? (
        // 已猜中：显示胜利信息
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-9xl font-bold mb-4">🎉</div>
          <div className="text-xl md:text-4xl font-bold text-green-400 mb-2">You got it!</div>
          <div className="text-3xl md:text-6xl font-bold text-white mt-4">{targetNumber}</div>
        </div>
      ) : (
        // 未猜中：显示猜测界面
        <div className="bg-gray-800 py-4 md:py-8 px-2 md:px-6 rounded-lg flex flex-col items-center w-full overflow-x-auto">
          {/* 猜测区域：显示当前范围和输入框 */}
          <div className="flex items-center justify-center w-full mb-4 md:mb-6">
            {/* 最小值 */}
            <span className="text-2xl sm:text-4xl md:text-6xl font-medium text-gray-300 w-16 sm:w-24 md:w-48 text-center">
              {minValue}
            </span>
            <span className="mx-1 md:mx-2 text-2xl sm:text-4xl md:text-6xl text-gray-300 w-6 md:w-12">
              ≤
            </span>

            {/* 猜测输入框 */}
            <input
              ref={inputRef}
              type="number"
              value={userGuessValue === null ? '' : userGuessValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className="w-20 sm:w-32 md:w-48 h-16 sm:h-24 md:h-32 text-center text-2xl sm:text-4xl md:text-6xl font-bold mx-1 md:mx-2 bg-gray-800 text-white border-2 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="?"
            />

            {/* 最大值 */}
            <span className="mx-1 md:mx-2 text-2xl sm:text-4xl md:text-6xl text-gray-300 w-6 md:w-12">
              ≤
            </span>
            <span className="text-2xl sm:text-4xl md:text-6xl font-medium text-gray-300 w-16 sm:w-24 md:w-48 text-center">
              {maxValue}
            </span>
          </div>

          {/* 猜测按钮 */}
          <button
            onClick={handleGuess}
            disabled={!isValidGuess()}
            className={`w-32 md:w-48 py-3 md:py-6 text-xl md:text-4xl text-center font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors btn-confirm`}
          >
            Confirm
          </button>
        </div>
      )}

      {/* 猜测历史记录列表 */}
      {guessHistory.length > 0 && (
        <div className="mt-4 md:mt-6 w-full px-12 py-4 bg-gray-800 rounded-lg">
          <h3 className="text-2xl md:text-2xl font-medium text-gray-300 mb-2 text-center">
            Guess History
          </h3>
          <ul className="rounded-lg max-h-60 overflow-y-auto">
            {guessHistory.map((item, index) => (
              <li
                key={index}
                className="flex justify-between py-1 text-xs md:text-sm border-b border-gray-700 last:border-0"
              >
                <span className="text-gray-300">
                  Try {index + 1}: {item.value}
                </span>
                <span
                  className={`${item.result === 'Correct!' ? 'text-green-400' : item.result === 'Too low' ? 'text-yellow-400' : 'text-red-400'}`}
                >
                  {item.result}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 重新开始按钮 */}
      {guessHistory.length >= 1 && (
        <button
          onClick={initializeGame}
          className="mt-4 md:mt-8 px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors"
        >
          Restart Game
        </button>
      )}
    </div>
  );
};

export default GuessNumber;
