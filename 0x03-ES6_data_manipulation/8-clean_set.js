/**
 * task 8
 */
export default function cleanSet(set, startString) {
  if (!set || !startString || typeof startString !== 'string' || typeof set !== 'object') {
    return '';
  }
  return [...set].filter((val) => val.startsWith(startString))
    .map((val) => val.slice(startString.length)).join('-');
}
