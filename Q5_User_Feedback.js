
const feedbacks = [
  { userId: "U1", ratings: [4, 5, 5], comments: ["Great", "Loved it", "Best app"] },
  { userId: "U2", ratings: [2, 3], comments: ["Okay", "Needs improvement"] },
  { userId: "U3", ratings: [5, 5, 5, 4, 5], comments: ["Fantastic", "Brilliant"] },
  { userId: "U4", ratings: [1, 2], comments: ["Bad UI", "Slow"] },
  { userId: "U5", ratings: [4, 4, 4], comments: ["Good", "Decent"] },
];


//Calculate average rating per user.
const avg_rating=feedbacks.map(user=>{
    const avg=user.ratings.reduce((a,b)=>(a+b), 0)/user.ratings.length;
    return {
        userId: user.userId,
        average: avg,
        total_comments: user.comments
    }
})
console.log(avg_rating)

//Return list of users with avg rating ≥ 4.5.
const top_users=avg_rating.filter(user=>user.average>=4.5);
console.log(top_users)

//Return: { userId, averageRating, totalComments }, sorted by averageRating descending.
const sorted=avg_rating.sort((a,b)=>b.average-a.average)
console.log(sorted)
