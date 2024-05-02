/***
 * Copy the file 1-calcul.js in a new file 2-calcul_chai.js
 * (same content, same behavior)
 */

function calculateNumber(type, a, b) {
    if (type === 'SUM') {
        return Math.round(a) + Math.round(b);
    }
    if (type === 'SUBTRACT') {
        return Math.round(a) - Math.round(b);
    }
    if (type === 'DIVIDE') {
        return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
    }
    return 0;
}
  
module.exports = calculateNumber;

