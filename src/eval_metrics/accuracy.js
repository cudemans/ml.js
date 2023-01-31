/**
 * Calculates the accuracy of predicted results
 * @param yTrue {Array} - Array of true values to test against
 * @param yPred {Array}  - Array of predicted values
 * @returns {Number} - Accuracy
 **/

export default function accuracy(yTrue, yPred) {
  if (yTrue.length != yPred.length) {
    console.log(
      `Arrays are of different length | ${yTrue.length} : ${yPred.length}`
    );
    return;
  }
  return (
    yTrue.map((d, i) => d == yPred[i]).reduce((a, b) => a + b, 0) / yTrue.length
  );
}
