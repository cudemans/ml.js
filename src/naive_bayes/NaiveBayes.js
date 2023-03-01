import { getMean, getVariance } from "summarystats";

export default class NaiveBayes {
  constructor(X, y) {
    this.nSamples = X.length;
    this.nFeatures = X[0].length;
    this.nClasses = [...new Set(y)];
    this.eps = 1e-6;
    this.classesMean = {};
    this.classesVar = {};
    this.classesPrior = {};
  }

  fit(X, y) {
    for (let i = 0; i < this.nClasses.length; i++) {
      const mask = y
        .map((d, j) => {
          if (d == i) {
            return j;
          }
        })
        .filter((el) => el);

      const X_c = mask.map((d, i) => {
        if (mask.contains(i)) {
          return d;
        }
      });

      this.classesMean[i] = getMean(X_c);
      this.classesVar[i] = getVariance(X_c);
      this.classesPrior[i] = X_c.length / this.nSamples;
    }
  }
  predict(X) {
    return;
  }

  pdf(X, mean, sigma) {
    const c =
      (-this.nFeatures / 2) * Math.log(2 * Math.PI) -
      0.5 * Math.log(sigma + this.eps);
    const probs = 0.5 * (Math.pow(x - mean, 2) / sigma + self.eps + 1);

    return c - probs;
  }
}
