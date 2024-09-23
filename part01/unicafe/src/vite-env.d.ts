/// <reference types="vite/client" />

enum FeedbackType {
  GOOD = "good",
  NEUTRAL = "neutral",
  BAD = "bad",
}

interface StatisticLineProps {
  feedback: FeedbackType;
  counter: number;
}

export { FeedbackType, StatisticLineProps };
