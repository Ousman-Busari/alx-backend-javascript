export default function getListStudentids(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  return getListStudents.map((student) => student.id);
}
