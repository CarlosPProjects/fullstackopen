import { useEffect, useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import StatisticLine from "./components/StatisticLine";
import { FeedbackType } from "./vite-env.d";
import { getTotalComments } from "./utils/utils";

function App() {
  const [goodValue, setGoodValue] = useState(0);
  const [neutralValue, setNeutralValue] = useState(0);
  const [badValue, setBadValue] = useState(0);

  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    setTotalValue(getTotalComments(goodValue, neutralValue, badValue));
  }, [goodValue, neutralValue, badValue]);

  const handleClick = (type: FeedbackType) => () => {
    if (type === "good") {
      setGoodValue(goodValue + 1);
    } else if (type === "neutral") {
      setNeutralValue(neutralValue + 1);
    } else if (type === "bad") {
      setBadValue(badValue + 1);
    }
  };

  return (
    <main>
      <Header title="Give Feedback" />
      <Button
        onclick={handleClick(FeedbackType.GOOD)}
        text={FeedbackType.GOOD}
      />
      <Button
        onclick={handleClick(FeedbackType.NEUTRAL)}
        text={FeedbackType.NEUTRAL}
      />
      <Button onclick={handleClick(FeedbackType.BAD)} text={FeedbackType.BAD} />

      <h2>Statistics</h2>
      <div>
        <StatisticLine feedback={FeedbackType.GOOD} counter={goodValue} />
        <StatisticLine feedback={FeedbackType.NEUTRAL} counter={neutralValue} />
        <StatisticLine feedback={FeedbackType.BAD} counter={badValue} />
      </div>
      <div>
        <p>All: {totalValue}</p>
      </div>
    </main>
  );
}

export default App;
