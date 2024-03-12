/**
 * task 8
 */
export default function cleanSet(set, startString) {
  if (!set || !startString || typeof startString !== 'string' || !(set instanceof Set)) {
    return '';
  }
  return [...set].filter((val) => val.startsWith(startString))
    .map((val) => val.slice(startString.length)).join('-');
}
