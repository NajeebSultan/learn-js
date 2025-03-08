const students = ["ali , ahmed , hassan "]
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);


console.log(studentsUpper);
console.log(studentsLower);

function upperCase(element){
  return element.toUpperCase();
}

function lowerCase(element){
  return element.toLowerCase();
}




