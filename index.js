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


// IF statement

let age = 25;
if(age>= 18){
  console.log("You are old enough to enter this site")

}

else{
  console.log("You must be 18+ to enter this site")
}

// ternary operator

let d = 23;
let message = d >=18 ? "You are an adult" : "You are a minor";
console.log(message);

let time =16;
let greeting = time <12  ? "Good Morning" : "Good Afternoon";
console.log(greeting);

let isstudent = true;
let alert = isstudent ? "You are student" : "You are NOT a student"
console.log(alert);

// switch statement

let day =5;

switch(day){
  case 1:
  console.log("It is monday");
  break;
  case 2:
  console.log("It is tuesday");
  break;
  case 3:
  console.log("It is Wednesday");
  break;
  case 4:
  console.log("It is Thursday");
  break;
  case 5:
  console.log("It is Friday");
  break;
  case 6:
  console.log("It is Saturday");
  break;
  case 7:
  console.log("It is Sunday");
  break;
  default:
  console.log("enter a valid input"); 
}


// string method

let userName = "Najeeb"
console.log(userName.charAt(1));
console.log(userName.length); 
// padstart , padend , include , replace all , endswith , startswith....


// string slicing

const fullName = "Najeeb Sultan";
//let firstName = fullName.slice(0,2);
//let lastName = fullName.slice(4 ,8);

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName= fullName.slice(fullName.indexOf(" ")+1);
console.log(firstName);
console.log(lastName);

//---- No METHOD CHAINING ----

let personname= window.prompt("Enter your username: ");
 
personname = personname.trim();
let letter = personname.charAt(0);
letter = letter.toUpperCase();

let extraChars = personname.slice(1);
extraChars = extraChars.toLowerCase();
personname = letter+ extraChars;

console.log(personname);

//--- METHOD CHANING-----

personname= personname.trim().charAt(0).toUpperCase()+ personname.trim().slice(1).toLowerCase();

console.log(personname);

//logical operators

const temp = 100;
if(temp > 0 && temp <=30){
  console.log("The weather is GOOD");
}
else{
  console.log("The weather is BAD")
}

const issunny =false;
if(!issunny){
  console.log("The weather is cloudy");
}
else{
  console.log("The weather is sunny");
}


// while loop 

let u = "";

while(u=== ""){
u = window.prompt(`Enter your name`);

}
console.log(`Hello ${u}`);


// Do while loop

let o = "";

do{
  o = window.prompt(`Enter your name`);
}
while(o=== "")
console.log(`Hello ${u}`);

let loggedIn = false;
let v;
let p;

while(!loggedIn){
  v= window.prompt(`Enter your name`);
  p = window.prompt(`Enter your password`);
 
 if(v === "myusername" && p === "mypassword"){
  loggedIn = true;
  console.log("You are logged in!");

 }
 else{
  console.log("Invalid credentials! Please try again.");
 }
}

// For loop

for( let i = 0 ; i<=2 ; i++){
  console.log("Hello");
}