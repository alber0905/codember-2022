const firstAscii = 97;
const lastAscii = 122;

const validAscii = (ascii: number): boolean => ascii >= firstAscii && ascii <= lastAscii;

const decryptWord = (message: string): string => {
  let restingCharacters = message;
  let response = '';
  let i = 0;
  while (restingCharacters.length > 0 && i < 10) {
    let ascii = parseInt(restingCharacters.substring(0, 3), 10);
    if (!validAscii(ascii)) {
      ascii = parseInt(restingCharacters.substring(0, 2), 10);
    }
    const char = String.fromCharCode(ascii);
    response = `${response}${char}`;
    restingCharacters = restingCharacters.replace(ascii.toString(), '');
    i++;
  }
  return response;
};

const decryptMessage = (message: string): string =>
  message
    .split(' ')
    .map((m) => decryptWord(m))
    .join(' ');

export default decryptMessage;
