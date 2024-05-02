/***
 * Create a new file named utils.js
 * Create a new module named Utils
 * Create a property named calculateNumber
 * and paste your previous code in the function
 * Export the Utils module
 */

const Utils = {
    calculateNumber(type, a, b) {
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
}
  
module.exports = Utils;

