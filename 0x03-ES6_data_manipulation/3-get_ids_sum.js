export default function getStudentIdsSum(student) {
  const studentIdsSum = student.reduce((sum, students) => sum + students.id, 0);
  return studentIdsSum;
}
