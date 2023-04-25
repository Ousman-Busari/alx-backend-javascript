export default function updateStudentGradeByCity(
  getListStudents,
  city,
  newGrades,
) {
  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const record = newGrades.find((grade) => student.id === grade.studentId);
      return {
        ...student,
        grade: record ? record.grade : 'N/A',
      };
    });
}
