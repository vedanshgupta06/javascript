const arr=["virat","ms","suresh"]
const arr2=["kohli","dhoni","raina"]

// arr.push(arr2)
// console.log(arr);
// console.log(arr[3][1]);

// const newarr = arr.concat(arr2)  //these merges the arr
// console.log(newarr)

//better way  -  spread operator
const newarr=[...arr,...arr2]
console.log(newarr)

const another_arr=[1,2,3,[4,5,6],7,[7,6,[5,7,6]]]

const usable_another_arr = another_arr.flat(Infinity)
 console.log(usable_another_arr);
 
console.log(Array.isArray("Vedansh"))
console.log(Array.from("Vedansh"))
console.log(Array.from({name :"Vedansh"}))//intresting read once more

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))