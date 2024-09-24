import { useEffect, useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import StatisticLine from "./components/StatisticLine";

import {
  getAverageScore,
  getPositivePercentage,
  getTotalComments,
} from "./utils/utils";

function App() {
  const [goodValue, setGoodValue] = useState(0);
  const [neutralValue, setNeutralValue] = useState(0);
  const [badValue, setBadValue] = useState(0);

  const [totalValue, setTotalValue] = useState(0);
  const [average, setAverage] = useState<number>(0);
  const [positivePercentage, setPositivePercentage] = useState<number>(0);

  useEffect(() => {
    const newTotalValue = getTotalComments(goodValue, neutralValue, badValue);
    setTotalValue(newTotalValue);

    if (newTotalValue > 0) {
      setAverage(
        getAverageScore(goodValue, neutralValue, badValue, newTotalValue)
      );
      setPositivePercentage(getPositivePercentage(goodValue, newTotalValue));
    }
  }, [goodValue, neutralValue, badValue]);

  const handleClick = (type: string) => () => {
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
      <Button onclick={handleClick("good")} text={"good"} />
      <Button onclick={handleClick("neutral")} text={"neutral"} />
      <Button onclick={handleClick("bad")} text={"bad"} />

      <h2>Statistics</h2>
      {totalValue > 0 ? (
        <>
          <table>
            <tbody>
              <tr>
                <StatisticLine feedback={"good"} value={goodValue} />
              </tr>
              <tr>
                <StatisticLine feedback={"eutral"} value={neutralValue} />
              </tr>
              <tr>
                <StatisticLine feedback={"bad"} value={badValue} />
              </tr>
              <tr>
                <StatisticLine feedback={"total"} value={totalValue} />
              </tr>
              <tr>
                <StatisticLine feedback={"average"} value={average} />
              </tr>
              <tr>
                <StatisticLine
                  feedback={"positive"}
                  value={positivePercentage}
                />
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </main>
  );
}

export default App;
