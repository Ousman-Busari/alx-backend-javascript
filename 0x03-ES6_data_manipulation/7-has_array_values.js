export default function hasValuesFromArray(set, arr) {
  const arraySet = new Set(arr);

  for (const ele of arraySet) {
    if (!set.has(ele)) {
      return false;
    }
  }

  return true;
}
