/**
 * task 8
 */
export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  return [...set].filter((val) => val.startsWith(startString))
    .map((val) => val.slice(startString.length)).join('-');
  /** const vals = [];
  * for (const val of set.values()) {
  * if (val.startsWith(startString)) {
  *    const r = val.substring(startString.length);
  *    if (r !== val) {
  *      vals.push(r);
  *    }
  *  }
  *}
  * return vals.join('-');
  */
}
