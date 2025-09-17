//Dates

let myDate= new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0,23)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2023, 0,23,5,3);
// console.log(myCreatedDate.toLocaleString());


 let myCreatedDate = new Date("01-14-2023");
 console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());//give in millisecond
console.log(Math.floor(Date.now()/1000));//give in second


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

// very useful 
newDate.toLocaleString('default',{
    weekday: "long",
    //and many more
})

