let numbers = [1 ,10 , 2, 9 ,3 ,8 ,4,7 ,5 ,6];
numbers.sort((a ,b) => a-b);

console.log(numbers);

const people = [{name: "Najeeb", age: 18 , gpa: 3.81},
  {name: "Ali", age: 20 , gpa: 3.71},
  {name: "Sameed", age: 25 , gpa: 2.7},
  {name: "Safi", age: 28 , gpa: 3.2},
  {name: "hassan", age: 17 , gpa: 3.1}
]

 people.sort((a , b) => a.age - b.age);
 people.sort((a ,b) => a.gpa -b.gpa);
 people.sort((a ,b)=> a.name.localeCompare(b.name));
 console.log(people);
