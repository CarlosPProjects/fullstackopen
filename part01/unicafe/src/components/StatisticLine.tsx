import { FC } from "react";
import { StatisticLineProps } from "../vite-env";

const StatisticLine: FC<StatisticLineProps> = ({ feedback, counter }) => {
  return (
    <p>
      {feedback} : {counter}
    </p>
  );
};

export default StatisticLine;
