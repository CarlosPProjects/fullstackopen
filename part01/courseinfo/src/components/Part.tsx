import { FC } from 'react'

interface PartProps {
  name: string;
  exercises: number;
}

const Part: FC<PartProps> = ({ name, exercises }) => {
  return (
    <p>
      {name} : {exercises}
    </p>
  )
}

export default Part;