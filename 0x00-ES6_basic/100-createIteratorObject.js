export default function createIteratorObject(report) {
  const allDeparmetEmployees = Object.values(report.allEmployees);
  let arr = [];
  for (const depEmployees of allDeparmetEmployees) {
    arr = arr.concat(depEmployees);
  }
  return arr;
}
