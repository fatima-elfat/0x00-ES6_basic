const express = require('express');
const app = express();
const port = 7865;

/***
 * Add a new endpoint: GET /cart/:id
 * :id must be only a number (validation must be in the route definition)
 * When access, the endpoint should return Payment methods for cart :id
 */

app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.end(`Payment methods for cart ${req.params.id}`);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
