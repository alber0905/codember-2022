import decryptMessage from './c2/decryptMessage';

const challenge2 = (): void => {
  const response = decryptMessage(
    '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101',
  );
  console.log(`Challenge 2 Response:
  ${response}`);
};

export default challenge2;
