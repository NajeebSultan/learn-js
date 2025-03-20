try{
  const dividend = window.prompt("Enter a dividend: ");
  const divisor = window.prompt("Enter a divisor: ");
  
if(divisor == 0){
  throw new Error("You cannot divide by zero");

}
if (isNaN(dividend) || isNaN(divisor)){
  throw new Error("Values must be a numbers");
}

  const result = dividend / divisor;
  console.log(result);
}
catch(error){
  console.log(error);
}
console.log("You have reached the end! ");
