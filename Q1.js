const users = [
  { name: "Alice", age: 28, isPremiumMember: true },
  { name: "Bob", age: 17, isPremiumMember: false },
  { name: "Charlie", age: 35, isPremiumMember: true },
  { name: "David", age: 22, isPremiumMember: false },
  { name: "Eva", age: 30, isPremiumMember: true },
];

//Filter only premium users aged 25 and above.
const filteredUsers = users.filter(user=>user.isPremiumMember && user.age>=25)
console.log(filteredUsers)

//Sort them by age in ascending order.
const sorted=filteredUsers.sort((a,b)=>a.age-b.age);
console.log(sorted)

//Return only their names as an array.
const names=sorted.map(user=>user.name)
console.log(names)