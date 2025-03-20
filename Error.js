try{
  const dividend = window.prompt("Enter a dividend: ");
  const divisor = window.prompt("Enter a divisor: ");
  
  const result = dividend / divisor;
  console.log(result);
}
catch(error){
  console.log(error);
}
console.log("You have reached the end! ");
