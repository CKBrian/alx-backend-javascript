export default function createIteratorObject(report) {
  let employees = Object.values(report.allEmployees);
  return [].concat(...employees)
}
