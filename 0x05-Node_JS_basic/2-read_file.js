const fs = require('fs');

const countStudents = (path) => {
  try {
    const students = [];
    const fields = new Set();

    fs.existsSync(path, (exists) => {
      if (!exists) {
        console.error('Cannot load the database');
      }
    });
    const data = fs.readFileSync(path, { encoding: 'utf-8', flag: 'r' });
    const lines = data.split('\n').filter((line, idx) => { return idx !== 0 && line.length !== 0; });
    lines.forEach((line) => {
      students.push(line);
      fields.add(line.split(',')[3]);
    });
    console.log(`Number of students: ${students.length}`);
    fields.forEach(field => {
      const fieldList = [];
      students.forEach(student => {
        if (student.split(',')[3] === field) {
          fieldList.push(student.split(',')[0]);
        }
      });
      const names = fieldList.join(', ');
      console.log(`Number of students in ${field}: ${fieldList.length}. List: ${names}`);
    });
  } catch (err) {
    console.error('Cannot load the database');
  }
};

module.exports = countStudents;
