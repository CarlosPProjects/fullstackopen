import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import StatisticLine from "./components/StatisticLine";

function App() {
  const [goodValue, setGoodValue] = useState(0);
  const [neutralValue, setNeutralValue] = useState(0);
  const [badValue, setBadValue] = useState(0);

  const handleClick = () => {
    
  };

  return (
    <main>
      <Header title="Give Feedback" />
      <Button onclick={handleClick} text="good" />
      <Button onclick={handleClick} text="neutral" />
      <Button onclick={handleClick} text="bad" />
      <div>
        <StatisticLine feedback="good" counter={goodValue} />
        <StatisticLine feedback="neutral" counter={neutralValue} />
        <StatisticLine feedback="bad" counter={badValue} />
      </div>
    </main>
  );
}

export default App;
