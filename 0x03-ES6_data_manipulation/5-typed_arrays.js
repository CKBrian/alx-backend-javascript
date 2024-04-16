export default function createInt8TypedArray(length, pos, val) {
  if (pos >= length) { throw new Error('Position outside range'); }
  const buffer = new ArrayBuffer(length);
  const dv1 = new DataView(buffer, 0, length);
  // const int8Arr = new Int8Array(buffer);
  // int8Arr[pos] = val;
  dv1.setInt8(pos, val);
  return dv1;
}
