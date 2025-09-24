//reduce 

const myNums = [1,2,3,4,5]

// const myTotal =myNums.reduce( function (acc,currVal){
//     return acc+currVal;
// },0)

const myTotal = myNums.reduce( (acc,currVal) => (acc+currVal),0)
console.log(myTotal);
