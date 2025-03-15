function outer(){
let message = "Hello";

  function inner(){
console.log(message);
  }
  inner();
}
outer();

function createCounter(){

  let count = 0;

function increment(){
   
  count++;
  console.log(`Count increased to ${count}`);
}
return {increment};

}
const counter = createCounter();
counter.increment();
counter.increment();
