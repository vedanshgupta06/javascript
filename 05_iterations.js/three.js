//looping on object
const myObj={
    js:"javascript",
    c:"cLang",
    py:"python",
    cpp:"c++"
}

for (const key in myObj) {
    console.log(`${key} is for ${myObj[key]}`);
}

const arr=[1,2,3,4,5]
const arr2=["js","cpp","java"]
for (const key in arr2) {
   console.log(key);// gives index in strings also
}
for (const key in arr2) {
   console.log(arr2[key]); //gives the string
}