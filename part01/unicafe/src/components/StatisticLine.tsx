import { FC } from "react";

interface StatisticLineProps {
  feedback: "good" | "neutral" | "bad";
  counter: number;
}

const StatisticLine: FC<StatisticLineProps> = ({ feedback, counter }) => {
  return (
    <p>
      {feedback} : {counter}
    </p>
  );
};

export default StatisticLine;
