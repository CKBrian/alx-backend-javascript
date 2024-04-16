const weakMap = new WeakMap();
function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) { weakMap.set(endpoint, 0); }
  if (weakMap.get(endpoint) >= 5) { throw new Error('Endpoint load is high.'); }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
}
// Export the const instance of WeakMap
export { weakMap };

// Export the queryAPI function
export { queryAPI };
