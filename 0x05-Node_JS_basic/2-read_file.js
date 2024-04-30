const fs = require('fs');

/** *
 * Create a function named countStudents. It should accept a path in argument
 * The script should attempt to read the database file synchronously
 * If the database is not available, it should throw an error with the text Cannot load the database
 * If the database is available, it should log the following message to
 * the console Number of students: NUMBER_OF_STUDENTS
 * It should log the number of students in each field, and the list with
 * the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
 * CSV file can contain empty lines (at the end) - and they are not a valid student!
 */
function countStudents(path) {
  let content;

  try {
    content = fs.readFileSync(path);
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  content = content.toString().split('\n');

  let students = content.filter((item) => item);

  students = students.map((item) => item.split(','));

  const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

  const fields = {};
  for (const i in students) {
    if (i !== 0) {
      if (!fields[students[i][3]]) fields[students[i][3]] = [];

      fields[students[i][3]].push(students[i][0]);
    }
  }

  delete fields.field;

  for (const key of Object.keys(fields)) {
    console.log(
      `Number of students in ${key}: ${fields[key].length}. List: ${fields[
        key
      ].join(', ')}`,
    );
  }
}

module.exports = countStudents;
