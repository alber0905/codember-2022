import challenge1 from './utils/challenge1';

const main = async (): Promise<void> => {
  await challenge1();
};

main().catch((ex) => console.log({ ex }));

export default main;
