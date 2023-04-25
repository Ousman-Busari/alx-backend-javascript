// export default function cleanSet(set, startString) {
//   if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';

//   return [...set]
//     .filter((ele) => ele.startsWith(startString))
//     .map((ele) => ele.slice(startString.length))
//     .join('-');
// }

export default function cleanSet(set, startString) {
  if (
    !startString
    || typeof startString !== 'string'
    || typeof set !== 'object'
  ) return '';
  return [...set]
    .filter((el) => el.startsWith(startString))
    .map((el) => el.slice(startString.length))
    .join('-');
}
