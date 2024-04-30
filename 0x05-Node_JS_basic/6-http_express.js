const express = require('express');

const app = express();
const port = 1245;

/** *
 * create a small HTTP server using Express module:
 * It should be assigned to the variable app and this one must be exported
 * HTTP server should listen on port 1245
 * Displays Hello Holberton School! in the page body for the endpoint /
 */
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});

module.exports = app;
