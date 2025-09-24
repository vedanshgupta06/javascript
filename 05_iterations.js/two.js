//for of loop

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for (const ele of arr) {
    console.log(ele);
}

const s="veda"
for (const ele of s) {
    console.log(ele);  
}



//Maps

const map=new Map();
map.set('IN',"India")
map.set('FR',"France")

console.log(map)

console.log(map.get("IN"))

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myObj={
    'game1':'NFS',
    'game2':'SpiderMan'
}

// for (const [key,value] of myObj) {
//     console.log(key,':-',value);    //gives error as these is not iterable
// }