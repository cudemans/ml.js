/**
 * Evaluate the performance of a classifier
 * @param yTrue {Array} - Array of true values
 * @param yPred {Array}  - Array of predicted values
 * @returns {Object} Object containing number of true positives (TP), false positives (FP),
 * true negatives (TN), and false negatives (FN).
 **/

export default function classPerf(yTrue, yPred) {
  let [TP, FP, TN, FN] = Array(4).fill(0);

  yTrue.forEach((d, i) => {
    if (d == yPred[i] && d == 1) {
      TP += 1;
    } else if (yPred[i] == 1 && d != yPred[i]) {
      FP += 1;
    } else if (d == yPred[i] && d == 0) {
      TN += 1;
    } else if (yPred[i] == 0 && d != yPred[i]) {
      FN += 1;
    }
  });

  return { TP, FP, TN, FN };
}
