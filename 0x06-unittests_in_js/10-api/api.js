const express = require('express');
const app = express();
const port = 7865;

/***
 * Add a new endpoint: GET /cart/:id
 * :id must be only a number (validation must be in the route definition)
 * When access, the endpoint should return Payment methods for cart :id
 * Add an endpoint GET /available_payments that returns an object
 * Add an endpoint POST /login that returns the message Welcome
 * :username where :username is the value of the body variable userName.
 */

app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.end(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  const meth = {
    payment_methods: { credit_cards: true, paypal: false },
  };
  res.json(meth);
});

app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.end(`Welcome ${username}`);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
