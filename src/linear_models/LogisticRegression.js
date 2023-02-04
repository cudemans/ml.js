import { dot, exp } from "mathjs";
import BaseRegression from "./BaseRegression.js";

export default class LogisticRegression extends BaseRegression {
  constructor(learningRate, numIters, classificationThreshold = 0.5) {
    super(learningRate, numIters);
    this.classificationThreshold = classificationThreshold;
    this.probas = [];
  }

  _approximation(features, X, weights, bias) {
    const linModel =
      features > 1
        ? dot(X, weights).map((d) => d + bias)
        : X.map((d) => d * weights).map((d) => d + bias);

    return linModel.map((d) => this._sigmoid(d));
  }

  _predict(features, X_test, weights, bias) {
    return this._approximation(features, X_test, weights, bias);
  }

  predict(X_test) {
    const predictions = this._predict(
      this.features,
      X_test,
      this.weights,
      this.bias
    );
    return predictions.map((d) => {
      return d > this.classificationThreshold ? 1 : 0;
    });
  }

  _sigmoid(x) {
    return 1 / (1 + exp(-x));
  }
}
