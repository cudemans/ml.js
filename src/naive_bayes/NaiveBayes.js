import mean from "../utils/mean.js";
import variance from "../utils/variance.js";
import createMatrix from "../utils/createMatrix.js";

export default class NaiveBayes {
  constructor() {
    this.nSamples = null;
    this.nFeatures = null;
    this.classes = null;
    this.nClasses = null;
    this.eps = 1e-6;
    this.classesMean = {};
    this.classesVar = {};
    this.classesPrior = {};
  }

  fit(X, y) {
    this.nSamples = X.length;
    this.nFeatures = X[0].length;
    this.classes = [...new Set(y)];
    this.nClasses = this.classes.length;

    this.classes.forEach((i) => {
      const mask = y
        .map((d, j) => {
          if (d == i) {
            return j;
          }
        })
        .filter((el) => el != undefined);

      const X_c = mask.map((d) => X[d]);

      this.classesMean[i] = this.nFeatures < 2 ? mean(X_c, 0) : mean(X_c, 1);
      this.classesVar[i] =
        this.nFeatures < 2 ? variance(X_c, 0) : variance(X_c, 1);
      this.classesPrior[i] = X_c.length / this.nSamples;
    });
    console.log(this.classesMean);
  }
  predict(X) {
    const probs = createMatrix(this.nSamples, this.nClasses, 0);

    this.classes.forEach((d) => {
      const prior = this.classesPrior[d];
      const probsC = this.pdf(X, this.classesMean[d], this.classesVar[d]);
      //   console.log(probs);
    });
  }

  pdf(X, mean, sigma) {
    // console.log(sigma);

    const c =
      this.nFeatures > 2
        ? sigma.map((d) => {
            return (
              (-this.nFeatures / 2) * Math.log(2 * Math.PI) -
              0.5 * Math.log(d + this.eps)
            );
          })
        : (-this.nFeatures / 2) * Math.log(2 * Math.PI) -
          0.5 * Math.log(sigma + this.eps);
    // const c =
    //   (-this.nFeatures / 2) * Math.log(2 * Math.PI) -
    //   0.5 * Math.log(sigma + this.eps);

    // const probs = 0.5 * (Math.pow(x - mean, 2) / sigma + this.eps + 1);
    // const probs =

    // console.log(
    //   (-this.nFeatures / 2) * Math.log(2 * Math.PI) - 0.5 * Math.log(this.eps)
    // );

    const probs = X.map((d) => {
      return (Math.pow(d - mean, 2) / sigma + this.eps + 1) * 0.5;
    });

    return probs.map((d) => {
      return d - c;
    });
  }
}
