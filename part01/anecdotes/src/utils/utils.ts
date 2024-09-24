const getRandomIndexFromArray = (array: string[]) => {
  return Math.floor(Math.random() * array.length);
};

const getGreatestValueFromArray = (array: number[]) => {
  return Math.max(...array);
};

const getIndexFromGreatestValue = (array: number[]) => {
  return array.indexOf(Math.max(...array));
};

export {
  getRandomIndexFromArray,
  getGreatestValueFromArray,
  getIndexFromGreatestValue,
};
