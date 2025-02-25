const mycheckbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBTn = document.getElementById("masterCardBTn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){


  if(mycheckbox.checked){
    subResult.textContent = 'You are subscried!';

  }
  else{
   subResult.textContent = 'You are NOT subscribed!'; 
  }
}