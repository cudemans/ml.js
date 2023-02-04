export default class BaseAlgorithm {
  score(y_pred, y_test) {
    const mapped = y_pred.map((d, i) => d == y_test[i]);
    return mapped.reduce((a, b) => a + b, 0) / mapped.length;
  }
}
