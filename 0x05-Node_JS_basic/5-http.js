const http = require('http');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DATABASE = args[0];
const host = '127.0.0.1';
const port = 1245;

/** *
 * create a small HTTP server using the http module:
 * It should be assigned to the variable app and this one must be exported
 * HTTP server should listen on port 1245
 * It should return plain text
 * When the URL path is /, it should display Hello Holberton School! in the page body
 * When the URL path is /students, it should display This is the list of
 * our students followed by the same content as the file 3-read_file_async.js
 * (with and without the database) - the name of the database must be
 * passed as argument of the file
 * CSV file can contain empty lines (at the end) - and they are not a valid student!
 *
 */

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(DATABASE);
      res.end(`${students.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.statusCode = 404;
  res.end();
});

app.listen(port, host, () => {
  process.stdout.write(`Server listening at -> http://${host}:${port}\n`);
});

module.exports = app;
