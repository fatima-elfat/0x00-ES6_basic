export default function createIteratorObject(report) {
  function* generator() {
    for (const d of Object.values(report.allEmployees)) {
      for (const e of d) {
        yield e;
      }
    }
  }
  const iter = generator();
  return iter;
}
