
let students=[
    {name: "Atharva",grade:85,age:25},
    {name : "Pritham", grade:92, age:23},
    {name : "Sahil", grade:78, age:26},
    {namr: "Swapnil", grade: 80, age: 22}
]

let FiltedStudents=students.filter(std=>std.grade> 75);
console.log(FiltedStudents)

FiltedStudents.sort((a,b)=>b.grade-a.grade);
console.log(FiltedStudents)

