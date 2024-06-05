const Utils = require('./utils');
/***
 * Create a new function named sendPaymentRequestToApi.
 * The function takes two argument totalAmount, and totalShipping
 * The function calls the Utils.calculateNumber function with type SUM,
 * totalAmount as a, totalShipping as b and display
 * in the console the message The total is: <result of the sum>
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const res = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${res}`);
};

module.exports = sendPaymentRequestToApi;
