import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(arr) {
  const list = getListStudentIds(arr);
  if (Array.isArray(arr)) {
    return list.reduce((accumulator, currVal) => accumulator + currVal, 0);
  }
  return [];
}
