const express = require('express');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DATABASE = args[0];
const app = express();
const port = 1245;

/** *
 * recreate the small HTTP server using Express:
 * It should be assigned to the variable app and this one must be exported
 * HTTP server should listen on port 1245
 * It should return plain text
 * When the URL path is /, it should display Hello Holberton School! in the page body
 * When the URL path is /students, it should display This
 * is the list of our students followed by the same content as
 * the file 3-read_file_async.js (with and without the database)
 * the name of the database must be passed as argument of the file
 * CSV file can contain empty lines (at the end) - and they are not a valid student!
 *
 */

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const msg = 'This is the list of our students\n';
  try {
    const students = await countStudents(DATABASE);
    res.send(`${msg}${students.join('\n')}`);
  } catch (error) {
    res.send(`${msg}${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});

module.exports = app;
