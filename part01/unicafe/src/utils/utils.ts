const getTotalComments = (good: number, neutral: number, bad: number) => {
  return good + neutral + bad;
};

const getAverageScore = (
  good: number,
  neutral: number,
  bad: number,
  total: number
) => {
  return (good * 1 + neutral * 0 + -1 * bad) / total;
};

const getPositivePercentage = (good: number, total: number) => {
  return good / total * 100;
}

export { getTotalComments, getAverageScore, getPositivePercentage };
