import { useState } from "react";
import { getIndexFromGreatestValue, getRandomIndexFromArray } from "./utils/utils";
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
      {anecdotes[selected]}
      <br />
      {points[selected] > 0 ? (<p>Has {points[selected]} votes</p>) : ""}
      <button onClick={handleClick}>Next anecdote</button>
      <button onClick={handleVote}>Vote</button>
      <button onClick={() => console.log(points)}>show</button>

      <h2>Anecdote with most votes</h2>
      {getIndexFromGreatestValue(points)}
    </div>
  );
}

export default App;
