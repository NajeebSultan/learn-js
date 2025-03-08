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

// Filter

let numbers = [1, 2 , 3 , 4 ,5, 6,7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);


console.log(evenNums);
console.log(oddNums);


function isEven(element){
  return element % 2 === 0;
}


function isOdd(element){
  return element % 2 !== 0;
}


const ages = [16 ,17 ,18 ,19 ,20];
const adults = ages.filter(isadult);
const children = ages.filter(isChild);


console.log(adults);
console.log(children);

function isadult(element){
  return element >= 18;
}

function isChild(element){
  return element < 18;
}

// .reduce

const prices = [5 , 10 , 30 , 12 , 34];
const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum (accumulator , element){
  return accumulator + element;

}


const grades = [75 , 50 , 60 , 65 , 70];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator , element){
  return Math.max(accumulator , element);
}

function getMin(accumulator , element){
  return Math.min(accumulator , element);
}


