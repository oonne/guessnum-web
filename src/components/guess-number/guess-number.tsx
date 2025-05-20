import { connection } from 'next/server';
import { Utils } from '@/utils';

const { randomWithin } = Utils;

const GuessNumber = async ({ max }: { max: number }) => {
  await connection();
  const number = randomWithin(max);

  return <div>{number}</div>;
};

export default GuessNumber;
