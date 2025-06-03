
const books = [
  { title: "Book A", genre: "Fiction", price: 250, unitsSold: 120, author: "Author 1", yearPublished: 2015 },
  { title: "Book B", genre: "Science", price: 300, unitsSold: 75, author: "Author 2", yearPublished: 2020 },
  { title: "Book C", genre: "Fiction", price: 200, unitsSold: 200, author: "Author 1", yearPublished: 2010 },
  { title: "Book D", genre: "History", price: 400, unitsSold: 60, author: "Author 3", yearPublished: 2018 },
  { title: "Book E", genre: "Science", price: 150, unitsSold: 90, author: "Author 2", yearPublished: 2016 },
  { title: "Book F", genre: "Fiction", price: 350, unitsSold: 80, author: "Author 4", yearPublished: 2021 },
  { title: "Book G", genre: "History", price: 280, unitsSold: 110, author: "Author 3", yearPublished: 2013 },
  { title: "Book H", genre: "Science", price: 200, unitsSold: 130, author: "Author 5", yearPublished: 2017 },
];

//Filter books sold after 2015 and in the genre "Science" or "Fiction".
const filteredbooks=books.filter(book=>book.yearPublished>2015 && (book.genre==="Science" || book.genre=== "Fiction"));
console.log(filteredbooks)


//Calculate totalRevenue (price × unitsSold) for each.
const total_revenue=filteredbooks.map(book=>{
    return{
        tot_revenue:book.price*book.unitsSold
    }
});
console.log(total_revenue)


//Return an array sorted by revenue, in descending order, with: { title, author, genre, totalRevenue }.
const sorted=total_revenue.sort((a,b)=>b.tot_revenue-a.tot_revenue);
console.log(sorted)