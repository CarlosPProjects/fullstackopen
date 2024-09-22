import { FC, useEffect, useState } from "react";

interface TotalProps {
  parts: Course[];
}

interface Course {
  name: string;
  exercises: number;
}

const Total: FC<TotalProps> = ({ parts }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    parts.forEach((e) => {
      sum += e.exercises;
    });
    setTotal(sum);
  }, [parts]);

  return (
    <p>
      <strong>Number of exercises: {total}</strong>
    </p>
  );
};

export default Total;
