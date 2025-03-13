const fruits = [{name: "apple" , color: "red" , calories: 45},
  {name: "orange" , color: "oange" , calories: 45},
  {name: "Banana" , color: "yellow" , calories: 105},
  {name: "coconut" , color: "white" , calories: 98},
  {name: "pineapple" , color: "yellow" , calories: 37}];

  console.log(fruits);
// forEach method

  fruits.forEach(fruit => console.log(fruit.color));
// map method
  const fruitName = fruits.map(fruit => fruit.name);
  const fruitColors = fruits.map(fruit => fruit.color);
  const fruitcalories= fruits.map(fruit => fruit.calories);

  console.log(fruitName);
  console.log(fruitColors);
  console.log(fruitcalories);

