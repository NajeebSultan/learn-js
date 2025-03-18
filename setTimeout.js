let timeoutId;


function startTimer(){
  setTimeout(() => window.alert("Hello"), 3000);
  console.log("starter");
  
}
function clearTimer(){
  clearTimeout(timeoutId);
  console.log("Cleared");
}