export default function cleanSet(set, startString) {
  if (
    typeof startString !== 'string'
    || startString.length === 0
    || typeof set !== 'object'
  ) return '';

  return [...set]
    .filter((ele) => ele.startsWith(startString))
    .map((ele) => ele.slice(startString.length))
    .join('-');
}
