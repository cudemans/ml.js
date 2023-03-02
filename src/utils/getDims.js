import getShape from "./getShape.js";

export default function getDims(data) {
  const length = getShape(data).length;

  return length == undefined ? 0 : length;
}
