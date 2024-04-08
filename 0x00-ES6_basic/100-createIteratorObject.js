export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees);
  return [].concat(...employees);
}
