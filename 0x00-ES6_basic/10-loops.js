export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const ele of array) {
    // var value = array[idx];
    // array[idx] = `${appendString}`;
    arr.push(`${appendString}${ele}`);
  }

  return arr;
}
