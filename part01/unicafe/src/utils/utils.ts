const getTotalComments = ({
  good,
  neutral,
  bad,
}: {
  good: number;
  neutral: number;
  bad: number;
}) => {
  return good + neutral + bad;
};

export { getTotalComments };
