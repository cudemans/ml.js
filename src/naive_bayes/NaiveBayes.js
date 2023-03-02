import mean from "../utils/mean.js";
import variance from "../utils/variance.js";

export default class NaiveBayes {
  constructor() {
    this.nSamples = null;
    this.nFeatures = null;
    this.nClasses = null;
    this.eps = 1e-6;
    this.classesMean = {};
    this.classesVar = {};
    this.classesPrior = {};
  }

  fit(X, y) {
    this.nSamples = X.length;
    this.nFeatures = X[0].length;
    this.nClasses = [...new Set(y)];

    this.nClasses.forEach((i) => {
      const mask = y
        .map((d, j) => {
          if (d == i) {
            return j;
          }
        })
        .filter((el) => el != undefined);

      const X_c = mask.map((d) => X[d]);

      this.classesMean[i] = this.nFeatures < 2 ? mean(X_c, 0) : mean(X_c, 1);
      console.log(this.classesMean);
      this.classesVar[i] =
        this.nFeatures < 2 ? variance(X_c, 0) : variance(X_c, 1);
      this.classesPrior[i] = X_c.length / this.nSamples;
    });
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
