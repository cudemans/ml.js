export default function getShape(data) {
  const shape = [];
  let curr = data;
  while (Array.isArray(curr)) {
    shape.push(curr.length);
    curr = curr[0];
  }

  return shape.length > 1 ? shape : shape[0];
}
