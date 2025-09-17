//const tinderUser = new Object()    //it is singleton

const tinderUser = {} //it is not singleton

tinderUser.id="223abc"
tinderUser.name="sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "someone@gmail.com",
    fullname : {
        userfullname : {
            firstname : "samm",
            lastname : "shah"
        }
    }
}
console.log(regularUser)
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.lastname)
console.log(regularUser.fullname?.userfullname.lastname) //? because if value doesnt exist it checks

const obj1 = {1: "a",2 :"b"}
const obj2 = {3: "a",4 :"b"}

// const obj3 = {obj1,obj2 }
// const obj3=Object.assign({},obj1,obj2)

const obj3 ={...obj1,...obj2} //best method
console.log(obj3)


const users = [
    {
        id:1,
        email:"as@gmail.com"
    },
    {
        id:1,
        email:"as@gmail.com"
    },
    {
        id:1,
        email:"as@gmail.com"
    },  
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'))