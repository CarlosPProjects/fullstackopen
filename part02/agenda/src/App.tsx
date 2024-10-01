import React, { useState } from "react";

function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newPersos = {
      name: newName,
    };

    setPersons(persons.concat(newPersos));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        {persons.map((e) => (
          <div key={e.name}>
            <p>{e.name}</p>
          </div>
        ))}
      </div>
      <form>
        <div>
          <input type="text" onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  );
}

export default App;
