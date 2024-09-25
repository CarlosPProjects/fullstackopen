import { FC } from 'react'

const Part: FC<TPart> = ({ id, name, exercises }) => {
  return (
    <p>
      {name} : {exercises}
    </p>
  )
}

export default Part;