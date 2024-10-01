import { FC } from "react";
import { TAgenda } from "../types/types";
import Person from "./Person";

interface PersonsProps {
  persons: TAgenda[];
}

const Persons: FC<PersonsProps> = ({ persons }) => {
  return (
    <div>
      {persons.map((e) => (
        <Person key={e.id} person={e} />
      ))}
    </div>
  );
};

export default Persons;
