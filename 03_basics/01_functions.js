// ... -it is called rest oprator and as well as spread operator
function sayMyName(){
    console.log("v");
    console.log("e");
    console.log("d");
    console.log("u");
}
//sayMyName()

function addTwoNum(num1, num2){
    console.log(num1+num2);
}

addTwoNum(4,5)

function addTwoNum2(num1, num2){
   return num1+num2;
}
const result = addTwoNum2(4,6)
console.log(result);

function loginUserMessage(username){
    return `${username} just logged in`;
}
console.log(loginUserMessage("ved"));
console.log(loginUserMessage()); //gives undefined just logged in



function loginUserMessage(username="sam"){
    return `${username} just logged in`;
}
console.log(loginUserMessage("ved"));
console.log(loginUserMessage()); //gives undefined just logged in


// function calculateCartPrice(num1){
//      return num1
// }
// console.log(calculateCartPrice(200,400,600));



// function calculateCartPrice(...num1){ // we used ...-rest operator
//      return num1
// }
// console.log(calculateCartPrice(200,400,600));


function calculateCartPrice(val1,val2,...num1){ 
     return num1
}
console.log(calculateCartPrice(200,400,600,500));


const user={
    username : "ved",
    price : 199
}


function handleObject(anyobject){
        console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)

const myNewArray = [200,400,600,800]

function returnSecondValue(getarray){
    return getarray[1]
}

console.log(returnSecondValue(myNewArray))