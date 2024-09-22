import { FC } from "react";
import Part from "./Part";

interface ContentProps {
  parts: Course[];
}

interface Course {
  name: string;
  exercises: number;
}

const Content: FC<ContentProps> = ({ parts }) => {
  return (
    <>
      {parts.map((e) => (
        <Part key={e.name} name={e.name} exercises={e.exercises} />
      ))}
    </>
  );
};

export default Content;
