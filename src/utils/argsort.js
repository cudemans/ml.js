/**
 * Utility function for returning the indices that would sort an array
 * @param yTrue {Array} - Array fow which to get indices
 * @param {Boolean} [ascending=True] - Array fow which to get indices | default is true
 * @returns {Array} - Array of indices
 **/

export default function argSort(array, ascending = true) {
  const copy = [...array];

  const sorted = ascending
    ? copy.sort((a, b) => a - b)
    : copy.sort((a, b) => a + b);

  return sorted.map((d) => {
    return array.indexOf(d);
  });
}
