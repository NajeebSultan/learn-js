
const mybutton = document.getElementById("mybutton");
const Label1 = document.getElementById("Label1");
const Label2 = document.getElementById("Label2");
const Label3 = document.getElementById("Label3");
const min = 1;
const max = 6;
let randomNum;

mybutton.onclick = function(){
   randomNum = Math.floor(Math.random() * max) + min;
   myLabel.textContent = randomNum;
}