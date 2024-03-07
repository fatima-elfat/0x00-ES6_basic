/**
 *
 */
export default class HolbertonCourse {
  constructor(name, length, students) {
    /**
     * verify the type of attributes during object creation.
     */
    if (typeof name !== 'string') {
      throw TypeError('Name must be a String');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a Number');
    }
    if (!Array.isArray(students)) {
      throw TypeError('Students must be an Array of Strings');
    }
    if (students.some((student) => typeof student !== 'string')) {
      throw TypeError('Students must be an Array of Strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Getter and setter of the name.
   */
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Getter and setter of the length.
   */
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Getter and setter of  the names of students.
   */
  get students() {
    return this._students;
  }

  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
