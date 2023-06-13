const readDatabase = require("../utils");

class StudentsControllers {
  static async getAllStudents(request, response) {
    await readDatabase(process.argv[2])
      .then((fieldStudentCounts) => {
        let responseText = "This is the list of our students\n";
        response.status(200);
        for (const field in fieldStudentCounts) {
          if (field) {
            const listStudents = fieldStudentCounts[field];
            responseText += `Number of students in ${field}: ${
              listStudents.length
            }. List: ${listStudents.join(", ")}\n`;
          }
        }
        response.end(responseText.slice(0, -1));
      })
      .catch(() => {
        response.status(500);
        response.end("Cannot load the database");
      });
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== "CS" && major !== "SWE") {
      response.status(500).end("Major parameter must be CS or SWE");
    }
    await readDatabase(process.argv[2])
      .then((fieldStudentCounts) => {
        response.status(200);
        const listStudents = fieldStudentCounts[major];
        response.end(`List: ${listStudents.join(", ")}`);
      })
      .catch(() => {
        response.status(500);
        response.end("Cannot load the database");
      });
  }
}

export default StudentsControllers;
module.exports = StudentsControllers;
