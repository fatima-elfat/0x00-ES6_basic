/**
 * task 4
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }
  if (!Array.isArray(newGrades)) {
    return [];
  }
  return students.filter((student) => student.location === city)
    .map((student) => {
      const [newGrade] = newGrades.filter((grade) => grade.studentId === student.id);
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}
