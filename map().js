const students = ["ali , ahmed , hassan "]
const studentsUpper = students.map(upperCase);

console.log(studentsUpper);

function upperCase(element){
  return element.toUpperCase();
}



