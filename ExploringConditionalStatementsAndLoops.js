// Task 1:
isLoggedIn = true

// Task 2:
 let shoppingCart = [
 {"item":"Rice",
 "price": 5},
{"item":"Chicken Breasts",
"price": 10},
{"item":"Broccoli",
"price": 4},
{"item":"Bananas",
"price": 6},
{"item":"Almond milk",
"price": 3}
 ]

const prices = shoppingCart.map((item) => item.price) // takes in our shoppingCart array and creates a new array by calling a function on each element within the array. This in particular extracts each individual price from shoppingCart and puts them all into an array.

// console.log(prices);

let shoppingCartTotal = shoppingCart.reduce((accumulator, item) => accumulator + item.price, 0); // takes in the parameters accumulator and item and adds each individual items price starting from 0 until all prices are added up to create the total.
console.log("Your total is:", shoppingCartTotal); 
