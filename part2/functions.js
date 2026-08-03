function sayMyName (){
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("a");
}


// sayMyName()
// sayMyName()
// sayMyName()
// sayMyName()
// sayMyName()


function addTwoNum (num1,num2){
    // This function currently does not print or return anything.
    // Use: return num1 + num2; or console.log(num1 + num2);
}
// addTwoNum(2, 3);  // no output unless you log/return inside the function

function loginUsermessage(username){
    return `${username} just logged in`
}

// console.log(loginUsermessage("shiva"));

function addCartPrice (val1,val2,...num1){
    return num1;  // returns the extra arguments as an array
}

// console.log(addCartPrice(20, 30, 50, 100));  // [50, 100]

const user = {
    name : "shiva",
    price : 499
}

function handleObject (anyObject){
    console.log(`the user is ${anyObject.name} and the price is ${anyObject.price}`);  
}
// handleObject(user)


// handleObject({
//     name : "aishu",
//     price : 10000
// })




// now we will see the function that wull accept the arrayinput 

function myNewArray (receivedArray){
    return receivedArray[1];
}
const arr =[12,13,1,3,56,6,5]

// console.log(myNewArray(arr));  // returns the second element of the array: 13


if(true){
    let a=10;
    const b=20;
    var c =30;
}

// var is function-scoped, not block-scoped.
// So c can be accessed outside this if block.
// Prefer let/const when you want block-level scope.



