export default function cleanSet(set, startString) {
  const arr = [];
  if (startString.length === 0) return '';
  for (const ele of set) {
    if (ele.startsWith(startString)) {
      arr.push(ele.slice(startString.length));
    }
  }
  return arr.join('-');
}
