import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newPersons = { ...persons, newName };

    setPersons(newPersons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name:{" "}
          <input
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
        </div>
        <div>
          <button onClick={handleSubmit} type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((e) => {
        return <div key={e.name}>{e.name}</div>;
      })}
    </div>
  );
}

export default App;
