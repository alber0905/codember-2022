const neededFields = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];

const validateRow = (row: string): string | boolean => {
  const elements = row
    .replace(/\n/g, ' ')
    .split(' ')
    .filter((e) => Boolean(e));

  const obj: Record<string, string> = {};

  elements.forEach((ele) => {
    const [key, value] = ele.split(':');
    obj[key] = value;
  });

  const hasAllFields = neededFields.every((field) => obj[field]);
  return hasAllFields ? obj.usr : false;
};

export default validateRow;
