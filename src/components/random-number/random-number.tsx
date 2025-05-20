import { connection } from 'next/server';
import { Utils } from '@/utils';

const { randomWithin } = Utils;

const RandomNumber = async ({ max }: { max: number }) => {
  await connection();
  const number = randomWithin(max);

  return <div>{number}</div>;
};

export default RandomNumber;
