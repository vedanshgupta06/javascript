//for each loop

const arr=["js","cpp","java","python"]

// arr.forEach( function (item) {
//     console.log(item);
// })
// //using arror function 
// arr.forEach((val)=>{ //val item kuch bhi lo bas naam hai
//     console.log(val);
// })

 function printMe(item) {
    console.log(item);
    
 }
arr.forEach(printMe)


arr.forEach( (item , index,arr) =>{
        console.log(item , index ,arr);
        
})

const myCoding= [
    {
        Language : "JavaScript",
        fileName : "js"
    },
    {
        Language : "java",
        fileName : "java"
    },
    {
        Language : "c++",
        fileName : "cpp"
    }
]
myCoding.forEach( ( item)=>{
    console.log(item.Language);
    console.log(item.fileName);

})