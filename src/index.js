const students = [
    { name: 'Bob', course: 1, averageGrade: 9 },
    { name: 'Holly', course: 2, averageGrade: 10 },
    { name: 'John', course: 2, averageGrade: 11 },
    { name: 'Mike', course: 3, averageGrade: 12 },
];
const totalAverageGrade = students.reduce((sum, student) => sum + student.averageGrade, 0) /
    students.length;
console.log('Загальний середій бал усіх студентів: ', totalAverageGrade);
const topStudent = students.reduce((maxStudent, student) => student.averageGrade > maxStudent.averageGrade ? student : maxStudent, students[0]);
console.log(`Студент ${topStudent.course} курсу ${topStudent.name} має найвищий бал - ${topStudent.averageGrade}`);
