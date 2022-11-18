import challenge2 from './utils/challenge2';
import challenge1 from './utils/challenge1';

const main = async (): Promise<void> => {
  await challenge1();
  challenge2();
};

main().catch((ex) => console.log({ ex }));

export default main;
