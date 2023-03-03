import classPerf from "./classPerf.js";
/**
 * The model precision score measures the proportion of positively predicted labels that are actually correct.
 * -- [Data Analytics](https://vitalflux.com/accuracy-precision-recall-f1-score-python-example/#What_is_Precision_Score)
 * @param yTrue {Array} - Array of true values to test against
 * @param yPred {Array}  - Array of predicted values
 * @returns {Number} - Precision score
 **/

export default function precisionScore(yTrue, yPred) {
  let { TP, FP, TN, FN } = classPerf(yTrue, yPred);

  return TP / (TP + FP);
}
