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