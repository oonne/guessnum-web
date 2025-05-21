import { Utils } from '@/utils';
import { connection } from 'next/server';
import RandomNumber from './random-number';

const { randomWithin } = Utils;

/**
 * 随机数生成器容器组件（服务器组件）
 * 每次刷新时都会生成新的随机数
 * @param max 随机数的最大范围
 */
const RandomNumberContainer = async ({ max }: { max: number }) => {
  // 确保每次刷新都能生成新的随机数
  await connection();

  // 生成1到max之间的随机数
  const number = randomWithin(max) + 1;

  return <RandomNumber max={max} initialNumber={number} />;
};

export default RandomNumberContainer;
