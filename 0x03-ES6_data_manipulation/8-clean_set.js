export default function cleanSet(set, startString) {
  const newSet = new Set();
  set.forEach((word) => {
    if (word.startsWith(startString)) {
      newSet.add(word.slice(startString.length));
    }
  });
  return [...newSet].join('-');
}
