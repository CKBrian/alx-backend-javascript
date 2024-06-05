const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.exists(path, (exists) => {
    if (!exists) {
      reject(new Error('Cannot load the database'));
      return;
    }

    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        console.error('Cannot load the database');
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = [];
      const fields = new Set();

      const lines = data.split('\n').filter((line, idx) => idx !== 0 && line.length !== 0);

      lines.forEach((line) => {
        students.push(line);
        fields.add(line.split(',')[3]);
      });

      let logEntry = `Number of students: ${students.length}\n`;
      let entries = '';
      fields.forEach((field) => {
        const fieldList = [];
        students.forEach((student) => {
          if (student.split(',')[3] === field) {
            fieldList.push(student.split(',')[0]);
          }
        });
        const names = fieldList.join(', ');
        entries += `Number of students in ${field}: ${fieldList.length}. List: ${names}\n`;
      });
      logEntry += entries;
      console.log(logEntry.trim());
      resolve(logEntry.trim());
    });
  });
});

module.exports = countStudents;
