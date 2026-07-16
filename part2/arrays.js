const myArr = [0,1,2,3,4,5]
// console.log(myArr);

// myArr.push(6)
// myArr.push(7)

// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// console.log(myArr.includes(7));  // false 
// console.log(myArr.indexOf(9));  // if not there -1 vasthadhi

// const newArr = myArr.join()
// console.log(newArr); // prints the value of the array by chaging its type to string and joining each element with ,it prints this but as a string 0,1,2,3,4,5

// console.log(myArr); // prints the my array exactly

// console.log(typeof myArr);  // type of array is a object
// console.log(typeof newArr); // its is a string because of join() method

//----------verrrrrrryyyyy immmmpooortantttt ----------

// the difference between the slice and splice is you know slice what splice does is no 1 : it starts from starting index to it also includes the last element and no 2 is it manipulates the orginal array by removing the spliced part 

//----------verrrrrrryyyyy immmmpooortantttt ----------


const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
// marvel_heros.push(dc_heros) // the problem is the total array will be pushed as a single elemment [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros);

// marvel_heros.concat(dc_heros) this is another method for adding the another string as a new element in the first array but here is also the same problem same as the above !!

// so the best way to to add two arrys or extend a single array is to use ... method


// const all_newheros =[...marvel_heros,...dc_heros]
// console.log(all_newheros); // this is the best possible method to add to two arrays [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_array = [1,2,3,[3,5,6,6,7,7],67,78,6,[3,4,66,332,2,[2,3,56,88,9,6,4,5]]]
const usable_array = another_array.flat(Infinity)
console.log(usable_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));









