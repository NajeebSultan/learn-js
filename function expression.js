setTimeout(function(){
  console.log("Hello");

}, 3000);

const numbers = [1 , 2 , 3 , 4 , 5 , 6];
const squares = numbers.map(function square(element){
  return Math.pow(element ,2);
});

const cubes = numbers.map(function square(element){
  return Math.pow(element ,3);
});

const evenNums = numbers.filter(function(element){
  return element % 2 ===0;
});

const oddNums = numbers.filter(function(element){
  return element % 2 !==0;
});


console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);






