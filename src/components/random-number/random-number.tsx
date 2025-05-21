'use client';

import { useState, useCallback } from 'react';
import { Utils } from '@/utils/index';

const { sleep, randomWithin } = Utils;

/**
 * 随机数生成组件客户端部分
 * @param max 随机数的最大范围
 */
const RandomNumber = ({ max, initialNumber }: { max: number; initialNumber: number }) => {
  const [number, setNumber] = useState(initialNumber);
  const [copied, setCopied] = useState(false);

  // 复制随机数到剪贴板
  const copyToClipboard = async () => {
    navigator.clipboard.writeText((number ?? 0).toString());
    setCopied(true);

    // 2秒后重置复制状态
    await sleep(2000);
    setCopied(false);
  };

  // 重新生成随机数
  const regenerateNumber = useCallback(() => {
    setNumber(randomWithin(max) + 1);
  }, [max]);

  return (
    <div className="flex flex-col items-center justify-center w-full p-6 bg-[#23272b] border border-gray-700 rounded-lg shadow-lg">
      {/* 标题：显示随机数范围 */}
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center text-white">
        Random number between 1 and {max}
      </h1>

      {/* 随机数显示区域 */}
      <div className="bg-gray-800 py-4 md:py-8 px-2 md:px-6 rounded-lg w-full">
        <div className="flex flex-col items-center">
          {/* 随机数显示 */}
          <div className="text-6xl md:text-9xl font-bold text-white mb-4">{number}</div>

          {/* 按钮区域 */}
          <div className="flex space-x-4 mt-4">
            {/* 复制按钮 */}
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded transition-colors"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>

            {/* 重新生成按钮 */}
            <button
              onClick={regenerateNumber}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors"
            >
              Regenerate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomNumber;
