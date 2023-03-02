export default function _matrixArrayIterator(arr, axis, statFn) {
  const rows = arr.length;
  const cols = arr[0].length;
  const stats = [];

  if (cols == undefined) {
    return statFn(arr);
  }

  if (axis === 0 || !axis) {
    for (let i = 0; i < rows; i++) {
      let values = [];
      for (let j = 0; j < cols; j++) {
        values.push(arr[i][j]);
      }
      stats.push(statFn(values));
    }
  } else if (axis === 1) {
    for (let i = 0; i < cols; i++) {
      let values = [];
      for (let j = 0; j < rows; j++) {
        values.push(arr[j][i]);
      }
      stats.push(statFn(values));
    }
  } else {
    throw new Error("Invalid axis value");
  }

  return stats;
}
