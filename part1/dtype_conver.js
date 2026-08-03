//let score = null // object is the type and this will be converted to number and 0 is printed 
//let score = undefined // object is undefined and this is also converted to number but the output will be NaN (not a number)
//let score = true // type will be boolean and this will be absolutely converted to number and then the output 1 will be printed as true represents 1 .
// "33abc" => this case the type will be shown as number even it is wrong and the output will be NaN when printed out . 

// console.log(typeof score);

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// // JavaScript Comparison Operators

// console.log(null > 0);      // false
// console.log(null == 0);     // false
// console.log(null >= 0);     // true

// console.log(undefined == 0); // false
// console.log(undefined > 0);  // false
// console.log(undefined < 0);  // false

// // Strict Equality (===)

// console.log("2" === 2);     // false


// primitive(copy of datatype is give not the original) are 7 categories => string ,number,boolean,null,undefined,symbol,BigInt 

// javascript is a dynamically typed language , TS const score :number =100 this is how we define something in typescript 

// reference type (non primitive ) ==> arrays ,objects ,functions 

// to master js master objects ,browseer web events or browser events 

// const heros =["shiva","aishu","pandu"] // array
// console.log(heros);



// let myObj ={
//     name : "shiva",
//     age : 18,           // curly braces lo unnadhi motham object antaru  
// }
// console.log(myObj);

// const myFunction = function(){
//     console.log("hello world ");
    
// }

// const name ="shiva"
// const repoCount= 50
// console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

const GameName = new String('shiva praneeth')
// console.log(GameName);  // [String: 'shiva praneeth']
// console.log(GameName.__proto__);  // {}
// console.log(GameName.charAt(2));  // i
// console.log(GameName.indexOf('p')); // 6

const NewString = GameName.substring(0,4)
console.log(NewString); // shiv  // remember here the second enterred number 4 will be ignored and everything befoer 4 is printed out 

const newStringOne ="     shiva      "
console.log(newStringOne.trim());
const url ="https://hitesh.com/hitesh%20choudary"
console.log(url.replace('%20','-'));
console.log(url.includes('hi'));

const a = "café";
const b = "café";

console.log(a === b);
 
