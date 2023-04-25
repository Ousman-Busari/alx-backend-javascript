export default function cleanSet(set, startString) {
  if (!set || !startString || typeof startString !== 'string' || !(set instanceof Set)) return '';

  return [...set]
    .filter((ele) => ele.startsWith(startString))
    .map((ele) => ele.slice(startString.length))
    .join('-');
}
