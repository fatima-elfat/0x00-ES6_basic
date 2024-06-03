const fs = require('fs');

/** *
 * It should read the database asynchronously
 * It should return a promise
 * When the file is not accessible, it should reject the promise with the error
 * When the file can be read, it should return an
 * object of arrays of the firstname of students per fields
 *
 */

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(Error(error));
        return;
      }
      const contt = data.toString().split('\n');
      let students = contt.filter((item) => item);
      students = students.map((item) => item.split(','));
      const gr = {};
      for (const s in students) {
        if (s !== 0) {
          if (!gr[students[s][3]]) gr[students[s][3]] = [];

          gr[students[s][3]].push(students[s][0]);
        }
      }
      delete gr.field;
      resolve(gr);
    });
  });
}

export default readDatabase;
