import _matrixArrayIterator from "./_matrixIterator.js";
import { getVariance } from "summarystats";

export default function mean(array, axis = 0) {
  return _matrixArrayIterator(array, axis, getVariance);
}
