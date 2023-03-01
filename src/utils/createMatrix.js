export default function createMatrix(m, n, fill) {
  return Array.from({ length: m }, () => new Array(n).fill(fill));
}
