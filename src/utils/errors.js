function _checkLength(array1, array2) {
  if (array1.length != array2.length) {
    throw new Error(`Arrays are of different length`);
  }
}

export { _checkLength };
