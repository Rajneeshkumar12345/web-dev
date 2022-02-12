
const products = [
    { name: "T-Shirt", price: 25 },
    { name: "Headphones", price: 125 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 200 },
  ];
 // Get the number of price which is atleast price 100

 let productAbove100 = products.map(function(product){
   return product.price
 }).filter(function(price){
    return price >= 100
 }).length

 console.log(productAbove100)