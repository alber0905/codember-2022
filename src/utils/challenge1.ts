import { readFile } from 'fs/promises';
import * as path from 'path';
import validateRow from './c1/validateRow';

const challenge1 = async (): Promise<void> => {
  const data = await readFile(path.resolve(__dirname, '../../data/challenge-1.txt'), 'utf8');

  const items = data.split('\n\n');

  const response = items.map((item) => validateRow(item));

  const valid = response.filter((r) => Boolean(r));
  console.log(
    `Challenge 1 Response:\nValid users: ${valid.length}\nLast valid user: ${valid[
      valid.length - 1
    ].toString()}`,
  );
};

export default challenge1;
