import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      if (data) {
        const rows = data.split('\n').slice(1, -1);
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
        resolve(fieldStudentCounts);
      }
    });
  });
}

export default readDatabase;
module.exports = readDatabase;
