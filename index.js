//let age =25;
let price = 10.99;
let gpa = 2.1;

//console.log(`You are ${age} years old`);
console.log(`The price is  ${price}`);
console.log(`Your gpa is: ${gpa}`);


let students = 50;
students++;
students--;
console.log(students);




let result;
result = 4 + 6 % 2 *4;
console.log(result);


let username;
//username = window.prompt(`Whats your name?`)
//console.log(username);

//document.getElementById("mysubmit").onclick = function(){
  username = document.getElementById("mytext").value;
  document.getElementById("myh1").textContent = `Hello ${username}`
// }



/* var age = window.prompt('How old are you');
age=Number(age)+1;
console.log(age);
 */

    
    //const = values that cannot be changed.

    let pi= 3.14;
    let radius;
    let circumference;

   /* 
    radius = window.prompt('Enter the radius of circle');
    radius= Number(radius);

    circumference= 2 * pi *radius;
    console.log(circumference); 
    */
  

    document.getElementById("mysubmit").onclick = function(){
      radius = document.getElementById("mytext").value;
      radius = Number(radius);
      circumference = 2 * pi * radius;
      document.getElementById("myh3").textContent = circumference + "cm";
    }


 let x =3;
let y =2;
let z = 1;

//z=Math.round(x);
//z=Math.floor(x);
//z=Math.ceil(x);
//z=Math.trunc(x);
//z=Math.pow(x , y);
//z=Math.sqrt(x);
//z=Math.sin(x);

let max = Math.max(x , y , z);
let min = Math.min(x , y , z);

console.log(max);
console.log(min);



//Random number generator

const n = 50;
const m = 100;

let randomNum = Math.floor(Math.random()* (m - n)) + n;

console.log(randomNum);