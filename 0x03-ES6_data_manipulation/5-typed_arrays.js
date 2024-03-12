/**
 * task 5
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const buff = new ArrayBuffer(length);
  const int8 = new Int8Array(buff, 0, length);
  int8.set([value], position);
  return new DataView(buff);
}
