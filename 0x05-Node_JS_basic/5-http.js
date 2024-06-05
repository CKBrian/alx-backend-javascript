const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, resp) => {
  if (req.url === '/') {
    resp.write('Hello Holberton School!');
    resp.end();
  } else if (req.url === '/students') {
    resp.write('This is the list of our students');

    countStudents('database.csv').then((data) => {
      console.log(data);
      resp.end(data);
    }).catch((err) => {
      resp.write(err);
      resp.end();
    });
  }
}).listen(1245);

module.exports = app;
