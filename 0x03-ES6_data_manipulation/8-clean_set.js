export default function cleanSet(set, startString) {
  if (!set || typeof startString !== 'string' || !(set instanceof Set) || !startString) {
    return '';
  }
  const newSet = new Set();
  set.forEach((word) => {
    if (word.startsWith(startString) && !(startString === word)) {
      newSet.add(word.slice(startString.length));
    }
  });
  return [...newSet].join('-');
}
