import { FC } from 'react'
import { sumCoursePartsExercises } from '../utils/utils'

interface TotalProps {
  course: TCourse
}

const Total: FC<TotalProps> = ({ course }) => {
  
  const total = sumCoursePartsExercises(course.parts);
  
  return (
    <strong>
      Total of {total} exercises
    </strong>
  )
}

export default Total;