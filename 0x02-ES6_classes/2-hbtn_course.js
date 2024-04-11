/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /* Name getter and setter */
  get name() { return this._name; }

  set name(value) {
    if (typeof (value) === 'string') {
      this._name = value;
    } else { throw new TypeError('Name must be a string'); }
  }

  /* Length getter and setter */
  get length() { return this._length; }

  set length(value) {
    if (typeof (value) === 'number') {
      this._length = value;
    } else { throw new TypeError('Length must be a number'); }
  }

  /* Students getter and setter */
  get students() { return this._students; }

  set students(value) {
    if (Array.isArray(value)) {
      this._students = value;
    } else { throw new TypeError('students must be a list'); }
  }
}
