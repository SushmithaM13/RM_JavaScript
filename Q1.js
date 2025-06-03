const users = [
  { name: "Alice", age: 28, isPremiumMember: true },
  { name: "Bob", age: 17, isPremiumMember: false },
  { name: "Charlie", age: 35, isPremiumMember: true },
  { name: "David", age: 22, isPremiumMember: false },
  { name: "Eva", age: 30, isPremiumMember: true },
];

const filteredUsers = users.filter(user=>user.age>=25)
console.log(filteredUsers)

const sorted=filteredUsers.sort((a,b)=>a.age-b.age);
console.log(sorted)

const names=sorted.map(user=>user.name)
console.log(names)