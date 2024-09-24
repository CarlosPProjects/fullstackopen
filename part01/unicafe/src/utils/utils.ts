const getTotalComments = (good: number, neutral: number, bad: number) => {
  return good + neutral + bad;
};

const getAverageScore = (good: number, neutral: number, bad: number) => {
  return (good + neutral + (-1 * bad))/10;
}

export { getTotalComments, getAverageScore };
