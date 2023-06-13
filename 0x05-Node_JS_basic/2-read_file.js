const fs = require('fs');

function countStudents(filePath) {
  let db = fs.existsSync(filePath);
  if (!db) {
    throw Error('Cannot load the database');
  } else {
    db = fs.readFileSync(filePath, 'utf8');
    const rows = db.split('\n').slice(1, -1);
    process.stdout.write(`Number of students: ${rows.length}\n`);
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
        process.stdout.write(`Number of students in ${field}: ${listStudents.length}. List: ${listStudents.join(', ')}\n`);
      }
    }
  }
}

module.exports = countStudents;
