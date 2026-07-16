// if we create the object with the help of constructor then we get single tonn 


// we will learn about the object literals 
const mySym = Symbol("key1")
const jsUser = {
    name : "shiva",
    class : "cse aiml",
    section : "c",
    age : 18,
    city : "hyderabad",
    [mySym] : "hello_man",
    "gender" : "M"

}

console.log(jsUser.name);
console.log(jsUser.section);
console.log(jsUser["gender"]); // remeber in this way also we can acces the object 
// console.log(jsUser.mySym);
// console.log(typeof(jsUser.mySym)); // string because the keys of object are directly converted to strings 

console.log(jsUser[mySym]); // now it prints the sam thing but the difference its its key is not converted to string because we use bracket so it refers to the symbol
// console.log(typeof(jsUser[mySym]));
console.log(jsUser); // this shows the symbol key as a actual symbol key 

// Object.freeze(jsUser) // the values cannot be modified in the object again because we freezed it 











