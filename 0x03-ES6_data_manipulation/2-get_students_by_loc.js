export default function getStudentsByLocation(students, city) {
  const studentInCity = students.filter((students) => students.location === city);
  return studentInCity;
}
