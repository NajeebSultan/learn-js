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

  // filter
  const yellowFruits = fruits.filter(fruit => fruit.color ==="yellow");
  const lowCalFruits = fruits.filter(fruit => fruit.calories < 100 );

  console.log(yellowFruits);
  console.log(lowCalFruits);

  // reduce

  const maxFruit = fruits.reduce((max , fruit) => fruit.calories > max.calories ? fruit : max);
  const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);

  console.log(maxFruit);
  console.log(minFruit);