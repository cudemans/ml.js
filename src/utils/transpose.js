import createMatrix from "./createMatrix.js";
import getShape from "./getShape.js";

export default function transposeArray(arr) {
  // If the input array is a 1-dimensional array, convert it to a 2-dimensional array with a single row
  if (!Array.isArray(arr[0])) {
    arr = [arr];
  }

  // Get the number of rows and columns in the input array
  const rows = arr.length;
  const cols = arr[0].length;

  // Initialize a new array with the transposed dimensions
  const transposed = createMatrix(cols, rows, 0);

  // Iterate over the input array and swap rows and columns
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transposed[j][i] = arr[i][j];
    }
  }
  // If this array is a 1D row vector, remove outer nesting
  return getShape(transposed)[0] == 1 ? transposed[0] : transposed;
}
