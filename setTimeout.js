let timeoutId;


function startTimer(){
  setTimeout(() => window.alert("Hello"), 3000);
  console.log("started");

}
function clearTimer(){
  clearTimeout(timeoutId);
  console.log("Cleared");
}