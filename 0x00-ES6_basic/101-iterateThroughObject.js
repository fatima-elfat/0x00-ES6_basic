export default function iterateThroughObject(reportWithIterator) {
  const a = [];
  for (const e of reportWithIterator) {
    a.push(e);
  }
  return a.join(' | ');
}
