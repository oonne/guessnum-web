import { Utils } from '@/utils';
import { connection } from 'next/server';

const { randomWithin } = Utils;

/**
 * 随机数生成组件
 * @param max 随机数的最大范围
 */
const RandomNumber = async ({ max }: { max: number }) => {
  await connection();
  // 生成1到max之间的随机数
  const number = randomWithin(max) + 1;

  return (
    <div className="flex flex-col items-center justify-center w-full p-6 bg-[#23272b] border border-gray-700 rounded-lg shadow-lg">
      {/* 标题：显示随机数范围 */}
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center text-white">
        Generated a random number between 1 and {max}
      </h1>

      {/* 随机数显示区域 */}
      <div className="bg-gray-800 py-4 md:py-8 px-2 md:px-6 rounded-lg w-full">
        <div className="flex flex-col items-center">
          {/* 随机数显示 */}
          <div className="text-3xl md:text-6xl font-bold text-white">{number}</div>
        </div>
      </div>
    </div>
  );
};

export default RandomNumber;
