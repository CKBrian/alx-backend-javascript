export default function updateUniqueItems(items) {
  if (!(items instanceof Map)) { throw new Error('Cannot process'); }
  return items
    .forEach((value, key, map) => {
      if (value === 1) {
        map.set(key, 100);
      }
    });
}
