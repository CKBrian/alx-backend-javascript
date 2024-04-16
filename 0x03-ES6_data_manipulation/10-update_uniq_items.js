export default function updateUniqueItems(items) {
  return items
    .forEach((value, key, map) => {
      if (value === 1) {
        map.set(key, 100);
      }
    });
}
