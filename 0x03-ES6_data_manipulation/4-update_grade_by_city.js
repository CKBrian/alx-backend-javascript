import getListStudentIds from './1-get_list_student_ids';

export default function updateStudentGradeByCity(arr, city, newGrades) {
  const idList = getListStudentIds(newGrades);
  if (Array.isArray(arr)) {
    return arr
      .filter((obj) => obj.location === city)
      .map((obj) => {
        if (idList.includes(obj.id)) {
          /* Destructure newGrades and access the first element */
          const [{ grade }] = newGrades.filter((obj1) => obj1.studentId === obj.id);
          /* Create a new object with the updated grade property */
          return { ...obj, grade };
        }
        /* Create a new object with the grade property set to 'N/A' */
        return { ...obj, grade: 'N/A' };
      });
  }
  return [];
}
