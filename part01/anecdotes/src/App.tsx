import { useState } from "react";
import {
  getGreatestValueFromArray,
  getIndexFromGreatestValue,
  getRandomIndexFromArray,
} from "./utils/utils";
import anecdotes from "./data/anecdotes";

function App() {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const handleClick = () => {
    setSelected(getRandomIndexFromArray(anecdotes));
  };

  const handleVote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      {points[selected] > 0 ? <p>Has {points[selected]} votes</p> : ""}
      <button onClick={handleClick}>Next anecdote</button>
      <button onClick={handleVote}>Vote</button>

      <h2>Anecdote with most votes</h2>
      {getGreatestValueFromArray(points) > 0 ? (
        <div>
          <p>{anecdotes[getIndexFromGreatestValue(points)]}</p>
          <p>Has {points[getIndexFromGreatestValue(points)]} votes</p>
        </div>
      ) : (
        "No votes yet"
      )}
    </div>
  );
}

export default App;
