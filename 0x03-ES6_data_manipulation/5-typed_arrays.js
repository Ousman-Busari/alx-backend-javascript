export default function createInt8typedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(10);
  const int8view = new Int8Array(buffer);
  int8view[position] = value;
  return buffer;
}
