import precisionScore from "./precisionScore.js";
import recallScore from "./recallScore.js";

export default function f1Score(yTrue, yPred) {
  const precision = precisionScore(yTrue, yPred);
  const recall = recallScore(yTrue, yPred);

  return (2 * precision * recall) / (precision + recall);
}
