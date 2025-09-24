// let a=10    global scope
// const b=20
// var c=30

if(true){  // block scope
let a=10
const b=20
var c=30
}
// console.log(a);//gives error
// console.log(b);//gives error
// console.log(c);//it runs


function one(){
    username : "ved"

    function two(){
        const website="youtube"
        console.log(website);
    }
    // console.log(website);//gives error
    two()
}

one()


//++++++++++++++++++++ interesting +++++++++++++++++
 addOne(5) //doesnt give error
 function addOne(num){
    return num+1
 }

addOne(5)


addtwo(5) //give error  due to the concept of hoisting   when declared in these way
const addtwo = function(num){
    return num+2
}
addtwo(5)