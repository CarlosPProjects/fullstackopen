import React, { useEffect, useState } from "react";
import { TAgenda } from "./types/types";
import { getFilteredAgenda, isNameRepeated } from "./lib/utils";

function App() {
  const [persons, setPersons] = useState<TAgenda[]>([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    if (newSearch.trim() === "") {
      console.log(persons);
    } else {
      const filtered = getFilteredAgenda(newSearch, persons);
      console.log(filtered);
    }
  }, [newSearch, persons]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isNameRepeated(newName, persons)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons([...persons, newPerson]);

      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <p>
          filter shown with:{" "}
          <input onChange={(e) => setNewSearch(e.target.value)} />
        </p>
      </div>
      <h2>Add new</h2>
      <form>
        <div>
          <p>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setNewName(e.target.value)}
              required
              id="name"
              name="name"
              value={newName}
            />
          </p>
          <p>
            <label htmlFor="number">Number: </label>
            <input
              type="text"
              placeholder="Number"
              onChange={(e) => setNewNumber(e.target.value)}
              required
              id="number"
              name="number"
              value={newNumber}
            />
          </p>
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
