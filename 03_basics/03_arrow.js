// this -> refers to the current context
// browser ke andar jo global object hai vo hai window object
const user={
    username: "ved",
    price : 909,

    welcomeMessage: function(){
        console.log(`welcome ${this.username} to our website`);
        // console.log(this);
        
    }
}

user.welcomeMessage()

user.username="sam"
user.welcomeMessage()
// console.log(this)

// function one(){
//     let username2="ved"
//     // console.log(this)
//     console.log(this.username2) //gives undefined
// }


// const one= function(){
//     let username2="ved"
//     console.log(this.username2) //gives undefined
// }


const one= ()=>{
    let username2="ved"
    console.log(this);
    console.log(this.username2)//gives undefined 
}
one()


const addTwo = (num1,num2) =>{
 return num1+num2;
}

console.log(addTwo(4,5))


//implicit return jab 1 hi line ka code ho
// const addThree= (num1,num2,num3) => num1+num2+num3
//or     const addThree= (num1,num2,num3) => (num1+num2+num3)




// const addThree= (num1,num2,num3) => {username3: "Ved"} //gives undefined
//object ko return karne ke liye () me wrap karna hi padta hai
const addThree= (num1,num2,num3) => ({username3: "Ved"})  //give the object

console.log(addThree(3,4,5));