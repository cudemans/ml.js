/**
 * Calculates the mean squared error
 * @param yTrue {Array} - Array of true values to test against
 * @param yPred {Array}  - Array of predicted values
 * @returns {Number} - Mean squared error
 **/

export default function MSE(yTrue, yPred) {
  if (yTrue.length != yPred.length) {
    console.log(
      `Arrays are of different length | ${yTrue.length} : ${yPred.length}`
    );
    return;
  }

  return (
    yTrue.map((d, i) => (d - yPred[i]) ** 2).reduce((a, b) => a + b, 0) /
    yTrue.length
  );
}
