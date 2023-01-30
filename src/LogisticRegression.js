import { dot, exp } from "mathjs";

export default class LogisticRegression {
  constructor(learningRate = 0.001, numIters = 1000) {
    this.learningRate = learningRate;
    this.numIters = numIters;
    this.weights = null;
    this.bias = null;
    this.numSamples = null;
    this.numFeatures = null;
  }

  fit(X, y) {
    this.numSamples = X.length;
    this.numFeatures = X[0].length;

    this.weights = new Array(this.numFeatures).fill(0);
    this.bias = 0;

    for (let i = 0; i < this.numIters; i++) {
      let linMod =
        this.numFeatures > 1
          ? dot(X, this.weights).map((d) => d + this.bias)
          : X.map((d) => d * this.weights).map((d) => d + this.bias);
      let yPred = linMod.map((d) => this._sigmoid(d));

      let dw =
        (1 / this.numSamples) *
        dot(
          X,
          yPred.map((d, i) => d - y[i])
        );

      let db =
        (1 / this.numSamples) *
        yPred.map((d, i) => d - y[i]).reduce((a, b) => a + b, 0);

      this.weights -= this.learningRate * dw;
      this.bias -= this.learningRate * db;
    }
  }
  predict() {
    const lm =
      this.numFeatures > 1
        ? dot(X_test, this.weights) + this.bias
        : X_test.map((d) => d * this.weights).map((d) => d + this.bias);
    const yPred = lm.map((d) => this._sigmoid(d));
    return yPred.map((d) => {
      return d > 0.5 ? 1 : 0;
    });
  }

  score(y_pred, y_test) {
    const mapped = y_pred.map((d, i) => d == y_test[i]);
    return mapped.reduce((a, b) => a + b, 0) / mapped.length;
  }

  _sigmoid(x) {
    return 1 / (1 + exp(-x));
  }
}
