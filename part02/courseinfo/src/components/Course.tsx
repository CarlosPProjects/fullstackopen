import { FC } from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

interface CourseProps {
  courses: TCourse[];
}

const Course: FC<CourseProps> = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <div>
          <Header title={course.name} />
          <Content parts={course.parts} />
          <Total course={course} />
        </div>
      ))}
    </>
  );
};

export default Course;
