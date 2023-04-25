export default function getStudentByLocation(getListStudents, city) {
  return getListStudents.filter((student) => student.location === city);
}
