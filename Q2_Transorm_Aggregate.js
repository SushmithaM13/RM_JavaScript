
const products = [
  { name: "Phone", category: "Electronics", ratings: [5, 4, 4] },
  { name: "Jeans", category: "Clothing", ratings: [4, 3, 5, 2] },
  { name: "Laptop", category: "Electronics", ratings: [5, 5, 5, 4] },
];


//Filter products with an average rating >= 4.5.
const avg_rating=products.filter(product=>{
    const avg=product.ratings.reduce((a,b)=>a+b, 0)/product.ratings.length;
    return avg>=4.5
});
console.log(avg_rating)

//Return a new array with name and averageRating only.
const new_array=avg_rating.map(product=>{
    const avg=product.ratings.reduce((a,b)=>a+b, 0)/product.ratings.length;
    return {name:product.name, averageRating:avg}
});
console.log(new_array);


// Sort the result by averageRating in descending order.
const sorted=new_array.sort((a,b)=>b.averageRating-a.averageRating);
console.log(sorted);
