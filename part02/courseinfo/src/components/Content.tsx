import { FC } from "react";
import Part from "./Part";

interface ContentProps {
  parts: TPart[];
}

const Content: FC<ContentProps> = ({ parts }) => {
  return (
    <>
      {parts.map((e) => (
        <Part key={e.name} name={e.name} exercises={e.exercises} id={e.id} />
      ))}
    </>
  );
};

export default Content;
