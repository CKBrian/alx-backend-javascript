export default function getListStudentLocation(arr, city) {
  if (Array.isArray(arr)) {
			return arr.filter((obj) => obj.location === city);
	}
  return [];
}
