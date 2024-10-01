import React, { useEffect, useState } from "react";
import { TAgenda } from "./types/types";
import { getFilteredAgenda, isNameRepeated } from "./lib/utils";
import Filter from "./components/Filter";
import Input from "./components/Input";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

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

  const [filteredPersons, setFilteredPersons] = useState<TAgenda[]>(persons);

  useEffect(() => {
    if (newSearch.trim() === "") {
      setFilteredPersons(persons);
    } else {
      const filtered = getFilteredAgenda(newSearch, persons);
      setFilteredPersons(filtered);
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
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setNewSearch={setNewSearch} />
      <h2>Add new</h2>
      <PersonForm
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  );
}

export default App;
