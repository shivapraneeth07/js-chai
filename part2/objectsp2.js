const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name ="abhilash"
tinderUser.IsLoggedIn = false


// console.log(tinderUser);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));  //prints keys i array data type 
// console.log(Object.values(tinderUser));  //prints keys i array data type 
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('IsLoggedIn')); // important check whether that exact key is available in the datbase or not 
// 
// console.log(tinderUser.hasOwnProperty('IsLoggedout'));


// console.log(tinderUser.toString());






const regularUser ={
    email: "someone@gmail.com",
    fullName : {
        userFullname :{
            firstName : "abhi",
            lastName : "lash"

        }
    }
}
// console.log(regularUser.fullName.userFullname.lastName);

const course = {
    courseName :"js in hindi",
    price : "1000",
    courseInstructor :"hitesh"
}
// console.log(course.courseInstructor);

const {courseInstructor : instructor} = course

console.log(instructor);
 

