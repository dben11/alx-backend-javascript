import getListStudents from './0-get_list_students';

export default function getListStudentIds(obj1) {
  if (!Array.isArray(obj1)) {
    return [];
  }
  const ids = obj1.map((obj1) => obj1.id);
  return ids;
}
