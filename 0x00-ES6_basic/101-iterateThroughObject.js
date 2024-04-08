export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  for (const [idx, item] of reportWithIterator.entries()) {
    if (idx === (reportWithIterator.length - 1)) {
      employees += `${item}`;
    } else {
      employees += `${item} | `;
    }
  }
  return employees;
}
