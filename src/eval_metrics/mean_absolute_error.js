/**
 * Calculates the mean absolute error
 * @param yTrue {Array} - Array of true values to test against
 * @param yPred {Array}  - Array of predicted values
 * @returns {Number} - Mean absolute error
 **/

export default function MAE(yTrue, yPred) {
  if (yTrue.length != yPred.length) {
    console.log(
      `Arrays are of different length | ${yTrue.length} : ${yPred.length}`
    );
    return;
  }

  return (
    yPred.map((d, i) => Math.abs(d - yTrue[i])).reduce((a, b) => a + b, 0) /
    yPred.length
  );
}
