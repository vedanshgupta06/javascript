const arr=["js","cpp","java","python"]

// const values=arr.forEach( (item)=>{
//         console.log(item)
//         return item
// })
// console.log(values); // gives undefined

const myarr=[1,2,3,4,5,6,7,8,9,10]

// const newNums = myarr.filter((num)=>num>4)
//or
const newNums = myarr.filter((num)=>{
    return num>4
})

console.log(newNums);
//implementing these using foreach loop
const newnums=[]
myarr.forEach( (item)=>{
    if(item>4){
        newnums.push(item);
    }
})

console.log(newnums);


const myNums=[1,2,3,4,5,6,7,8,9,10]

//const newnums2=myNums.map((num) => num+10)
//chaining
// const newnums2 =myNums.map((num)=>num*10).map((num)=>num/5)
const newnums2 =myNums.map((num)=>num*10).map((num)=>num/5).filter((num)=>(num>5))
console.log(newnums2);
