import readDatabase from '../utils';
/** *
 * The method accepts request and response as argument
 * It should return a status 200
 * It calls the function readDatabase from the utils file, and display in the page:
 * First line: This is the list of our students
 * And for each field (order by alphabetic order case insensitive),
 * a line that displays the number of students in the field,
 * and the list of first names (ordered by appearance in the database file)
 * with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
 * If the database is not available, it should return a status 500
 * and the error message Cannot load the database
 *
 *
 * The method accepts request and response as argument
 * It should return a status 200
 * It uses a parameter that the user can pass to the browser major.
 * The major can only be CS or SWE. If the user is passing another parameter,
 * the server should return a 500 and the error Major parameter must be CS or SWE
 * It calls the function readDatabase from the utils file,
 * and display in the page the list of first names for the students
 * (ordered by appearance in the database file) in the specified field List:
 * LIST_OF_FIRSTNAMES_IN_THE_FIELD
 * If the database is not available, it should return a status 500
 * and the error message Cannot load the database
 */

class StudentsController {
  static getAllStudents(request, response, DATABASE) {
    readDatabase(DATABASE)
      .then((fields) => {
        const students = [];
        let msg;
        students.push('This is the list of our students');

        for (const key of Object.keys(fields)) {
          msg = `Number of students in ${key}: ${
            fields[key].length
          }. List: ${fields[key].join(', ')}`;

          students.push(msg);
        }
        response.send(200, `${students.join('\n')}`);
      })
      .catch(() => {
        response.send(500, 'Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response, DATABASE) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.send(500, 'Major parameter must be CS or SWE');
    } else {
      readDatabase(DATABASE)
        .then((fields) => {
          const students = fields[major];
          response.send(200, `List: ${students.join(', ')}`);
        })
        .catch(() => response.send(500, 'Cannot load the database'));
    }
  }
}

export default StudentsController;
