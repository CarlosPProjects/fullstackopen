import { FC } from 'react'
import { TAgenda } from '../types/types';

interface PersonProps {
  person: TAgenda;
}

const Person: FC<PersonProps> = ({ person }) => {
  return (
    <p>
      {person.name}: {person.number}
    </p>
  )
}

export default Person;