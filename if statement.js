const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age ;

mySubmit.onclick = function(){

  age = myText.value;
  age = Number(age);

  if (age>=100){
    resultElement.textContent = 'You are Too OLD to enter this site';

  }
  else if(age==0){
    resultElement.textContent = 'You cannot enter. You are just born';
    
  }

  else if(age>=18){
    resultElement.textContent = 'You are old enough to enter this site';
    
  }
  else if(age<0){
    resultElement.textContent = 'Your age cannot be below';
    
  }
  else {
    resultElement.textContent = 'You must be 18+ to enter this site';
    
  }
}
