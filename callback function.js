hello(leave);

function hello(callback){
  console.log("Hello!");
callback();
}

function wait(){
  console.log("Wait!");
}

function leave(){
  console.log("Leave!");
}

function goodbye(){
  console.log("Goodbye!");
}

sum(displayConsole , 1 ,2);

function sum(callback , x ,y){
  let result = x + y;
  callback(result);
}

function displayConsole(result){
  console.log(result);
}