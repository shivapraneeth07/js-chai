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
    // console.log(num1+num2);
}
// addTwoNum(2,3)


function loginUsermessage(username){
    return `${username} just logged in`
}

// console.log(loginUsermessage("shiva"));

function addCartPrice (val1,val2,...num1){
    return num1;
}

// console.log(addCartPrice(20,30,50,100));


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

// console.log(myNewArray(arr));  // the function return the 2nd element of the array and that will will be printed 


if(true){
    let a=10;
    const b=20;
    var c =30;
}

// console.log(a);
// console.log(b);
// console.log(c);   /// see here the c will be printed even its its scope is in the if block that is the problem with var 
// only c declare chesina alane print avuthadhi c soo use let or const for declaring any variable




const arr1 =[1,2,3,45,6,7]

for (const i of arr1) {
    // console.log(i);
    
}



const myCoding =[
    {
        language : "python",
        filename : "py"
    },
    {
        language : "c++",
        filename : "cpp"
    },
    {
        language : "javascript",
        filename : "js"
    }
]



myCoding.forEach( (item) => {
    // console.log(item.language);
} )


myCoding.forEach((item)=> {
    // console.log(item.filename);
    
} )





const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

    // const userBooks = books.filter( (bk) => bk.genre === "History" )
    // const ub1 = books.filter( (bk1) => bk1.publish >= 2000 )
    // console.log(ub1);
    
    // console.log(userBooks)

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const updatedNumbers = [];

myNumbers.forEach((num) => {
    updatedNumbers.push(num + 10);
});

console.log(updatedNumbers);



