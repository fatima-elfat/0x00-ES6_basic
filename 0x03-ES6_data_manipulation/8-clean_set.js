/**
 * task 8
 */
export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string' || !startString.length) {
    return '';
  }
  return [...set].filter((val) => val.startsWith(startString))
    .map((val) => val.slice(startString.length)).join('-');
}
