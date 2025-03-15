function outer(){
let message = "Hello";

  function inner(){
console.log(message);
  }
  inner();
}
outer();


let count = 0;
function increment(){
  let count = 0;
  count++;
  console.log(`Count increased to ${count}`);
}