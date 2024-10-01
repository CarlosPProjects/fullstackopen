import React, { useState } from "react";
import { TAgenda } from "./types/types";
import { isNameRepeated } from "./utils/utils";

function App() {
  const [persons, setPersons] = useState<TAgenda[]>([
    { name: "Arto Hellas", number: "123123123" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isNameRepeated(newName, persons)) {
      alert(`${newName} exists in agenda`);
    } else {
      const newPersons = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(newPersons));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Number"
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((e) => (
          <div key={e.name}>
            <p>
              {e.name} : {e.number}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
