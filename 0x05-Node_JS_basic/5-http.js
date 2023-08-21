const http = require('http');
const fs = require('fs');

const app = http.createServer();

const port = 1245;

app.on('request', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    let responseText = 'This is the list of our students\n';
    fs.readFile(process.argv[2], 'utf8', (err, data) => {
      if (err) {
        responseText += 'Cannot load the database\n';
      }
      if (data) {
        const rows = data.split('\n').slice(1, -1);
        responseText += `Number of students: ${rows.length}\n`;
        const fieldStudentCounts = {};
        for (const row of rows) {
          if (row) {
            const student = row.split(',');
            const field = student[3];
            if (!fieldStudentCounts[field]) {
              fieldStudentCounts[field] = [];
            }
            fieldStudentCounts[field].push(student[0]);
          }
        }
        for (const field in fieldStudentCounts) {
          if (field) {
            const listStudents = fieldStudentCounts[field];
            responseText += `Number of students in ${field}: ${
              listStudents.length
            }. List: ${listStudents.join(', ')}\n`;
          }
        }
      }
      res.end(responseText.slice(0, -1));
    });
  }
});

app.listen(port);

module.exports = app;
