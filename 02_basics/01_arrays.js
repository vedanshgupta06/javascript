//array

const arr=[1,2,3,4,5,6]  //in js it is resizeable
const strarr=["abcdefg","hijklmnop"]
const arr2 = new Array(1,2,3,4)
console.log(arr[0]);
console.log(strarr);
console.log(arr2);

//shallow copy -> shares the same references (ek me change to orignal me bhi change hoga)
// deep copy -> do not share the same references


//array Methods
arr.push(7)
arr.push(8) //add ele
arr.pop() //pop last element

console.log(arr);

arr.unshift(0)
arr.unshift(9) //insert ele at start of the arr
arr.shift() //remove the ele from start
console.log(arr);

console.log(arr.includes(10)) //checks if the ele is present or not
console.log(arr.indexOf(10));
console.log(arr.indexOf(7));

const arr3=arr.join()   //binds and convert arr to string
console.log(arr);
console.log(arr3);
console.log(typeof arr3);

//slice , splice

console.log("A", arr);
const myn1=arr.slice(1,3)//it just take the ele doesnt cut down it from the main arr
console.log(myn1);
console.log("B",arr);

console.log("A", arr);
const myn2=arr.splice(1,3) //it cuts the array(1,3)both included it manipulates the orignal arr
console.log(myn2);
console.log("B",arr);

