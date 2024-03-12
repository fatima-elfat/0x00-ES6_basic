/**
 * task 3
 */
export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    const initialValue = 0;
    const sumWithInitial = students.reduce(
      (accumulator, currentStudent) => accumulator + currentStudent.id,
      initialValue,
    );
    return sumWithInitial;
  }
  return [];
}
