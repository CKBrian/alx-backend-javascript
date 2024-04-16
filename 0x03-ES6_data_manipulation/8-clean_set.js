export default function cleanSet(set, startString) {
  if (!set && typeof startString !== 'string') {
    return '';
  }
  const newSet = new Set();
  set.forEach((word) => {
    if (word.startsWith(startString) && startString) {
      newSet.add(word.slice(startString.length));
    }
  });
  return [...newSet].join('-');
}
