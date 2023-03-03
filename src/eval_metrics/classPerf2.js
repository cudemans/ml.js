export default function classPerf(yTrue, yPred) {
  const uniqueTrue = [...new Set(yTrue)];
  const uniquePred = [...new Set(yPred)];

  const unique =
    uniqueTrue.length > uniquePred.length ? uniqueTrue : uniquePred;

  let newArray = Array.from({ length: unique.length }, () =>
    new Array(unique.length).fill(0)
  );

  unique.forEach((d, i) => {
    unique.forEach((f, j) => {
      newArray[i][j] = yTrue
        .map((a, k) => a == unique[i] && yPred[k] == unique[j])
        .reduce((a, b) => a + b, 0);
    });
  });

  const xDim = unique.length - 1;
  const yDim = unique.length - 1;

  // TP = [0, 0]
  // FN = [0 ,1:]
  // F

  console.log(newArray);
}
