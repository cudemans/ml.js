import _matrixArrayIterator from "./_matrixIterator.js";
import { getMean } from "summarystats";

export default function mean(array, axis = 0) {
  return _matrixArrayIterator(array, axis, getMean);
}
