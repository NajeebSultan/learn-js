let age =25;
let price = 10.99;
let gpa = 2.1;

console.log(`You are ${age} years old`);
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

document.getElementById("mysubmit").onclick = function(){
  username = document.getElementById("mytext").value;
  document.getElementById("myh1").textContent = `Hello ${username}`
}


