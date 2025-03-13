let a = 1;
let b = 2;

[a ,b ] = [b , a];

console.log(a);
console.log(b);


// Swap values in array

const colors = ["red" ,"green", "blue","black" , "white"];
[colors[0] , colors [4]] = [colors[4] , colors[0]];
console.log(colors);

// Assign array elements to variables

const color = ["red" ,"green", "blue","black" , "white"];
const [firstColor , secondColor , thirdColor , ...extraColors] = color;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);