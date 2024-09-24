import { FC } from "react";

interface StatisticLineProps {
  feedback: string;
  value: number;
}

const StatisticLine: FC<StatisticLineProps> = ({ feedback, value }) => {
  return (
    <>
      <td> {feedback}</td>
      {feedback === "positive" ? <td>{value} %</td> : <td>{value}</td>}
    </>
  );
};

export default StatisticLine;
