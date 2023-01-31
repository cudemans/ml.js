import MSE from "./mean_squared_error.js";

/**
 * Calculates the root mean squared error
 * @param yTrue {Array} - Array of true values to test against
 * @param yPred {Array}  - Array of predicted values
 * @returns {Number} - Root mean squared error
 **/

export default function RMSE(yPred, yTrue) {
  if (yTrue.length != yPred.length) {
    console.log(
      `Arrays are of different length | ${yTrue.length} : ${yPred.length}`
    );
    return;
  }

  return Math.sqrt(MSE(yPred, yTrue));
}
