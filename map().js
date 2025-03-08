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

const dates = ["2024-1-10 , 2025-2-25 , 2026-3-30"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element){
  const parts = element.split("-");
 return `${parts[1]}/${parts[2]}/${parts[0]}`;
}




