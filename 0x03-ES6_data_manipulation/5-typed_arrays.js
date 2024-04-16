export default function createInt8TypedArray(length, pos, val) {
  if (pos >= length) { throw new Error('Position outside range'); }
  const buffer = new ArrayBuffer(length);
  const dv1 = new DataView(buffer, 0, length);
  dv1.setInt8(pos, val);
  return buffer;
}
