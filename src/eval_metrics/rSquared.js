/**
 * Calculates R2 score
 * @param yTrue {Array} - Array of true values to test against
 * @param yPred {Array}  - Array of predicted values
 * @returns {Number} - R2 score
 **/

export default function R2(yTrue, yPred) {
  if (yTrue.length != yPred.length) {
    console.log(
      `Arrays are of different length | ${yTrue.length} : ${yPred.length}`
    );
    return;
  }

  const SSR = yTrue
    .map((d, i) => (d - yPred[i]) ** 2)
    .reduce((a, b) => a + b, 0);

  const yTrueMean = yTrue.reduce((a, b) => a + b, 0) / yTrue.length;

  const TSS = yTrue.map((d) => (d - yTrueMean) ** 2).reduce((a, b) => a + b, 0);

  return SSR / TSS;
}
