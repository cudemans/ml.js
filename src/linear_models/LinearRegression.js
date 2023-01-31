import { dot } from "mathjs";
import BaseRegression from "./BaseRegression.js";

export default class LinearRegression extends BaseRegression {
  constructor(learningRate, numIters) {
    super(learningRate, numIters);
  }

  _approximation(features, X, weights, bias) {
    return features > 1
      ? dot(X, weights).map((d) => d + bias)
      : X.map((d) => d * weights).map((d) => d + bias);
  }

  _predict(features, X_test, weights, bias) {
    return this._approximation(features, X_test, weights, bias);
  }

  predict(X_test) {
    return this._predict(this.numFeatures, X_test, this.weights, this.bias);
  }
}
