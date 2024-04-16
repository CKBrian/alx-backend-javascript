export default function createInt8TypedArray(length, pos, val) {
  if (pos >= length || pos < 0) { throw new Error('Position outside range'); }
  const buffer = new ArrayBuffer(length);
  const int8Arr = new Int8Array(buffer);
  int8Arr[pos] = val;
  return buffer;
}
