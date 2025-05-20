import { connection } from 'next/server';
import { Utils } from '@/utils';

const { randomWithin } = Utils;

const GuessNumber = async ({ max }: { max: number }) => {
  await connection();
  const number = randomWithin(max) + 1;

  return (
    <div>
      <h1>Guess a number between 1 and {max}</h1>
      <div>{number}</div>
    </div>
  );
};

export default GuessNumber;
