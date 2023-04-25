export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw Error('Cannot process');
  }

  for (const [key, value] of groceries) {
    if (value === 1) {
      groceries.set(key, 100);
    }
  }

  return groceries;
}
