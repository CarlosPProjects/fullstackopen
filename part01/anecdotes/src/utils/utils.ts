const getRandomIndexFromArray = (array: string[]) => {
  return Math.floor(Math.random() * array.length);
};

const getIndexFromGreatestValue = (array: number[]) => {
  return array.indexOf(Math.max(...array));
}

export { getRandomIndexFromArray, getIndexFromGreatestValue };
