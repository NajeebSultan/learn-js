const hello = (name ,age) => {console.log(`Hello ${name}`)
console.log(`You are ${age} year old`)};

hello("Bro" , 25);


setTimeout( () => console.log("Hello") ,3000);

const numbers = [ 1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));

console.log(cubes);
console.log(squares);


