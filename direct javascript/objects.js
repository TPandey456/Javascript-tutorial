//  Singleton 

//  object Literals 

// object literals 
let sym = Symbol("key1")  

let user ={
    name: "Tanishq", 
    "last name": "Pandey",
    Age : 22, 
    // sym:"key1",
    [sym]:"key1",                 /*  ab y symbol objects k  keys m add kie  */
    city : "Kanpur Nagar",
    Satate : "Uttar Pradesh",
    isloggedIn : false ,
    lastlogin :["Monday" , "Tuesday"]
}

/* ++++++++++++++++++++++++++++++++++++++ ACCESS the OBJECT value +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 

// console.log(user.city);
// console.log(user["Age"]);
// console.log(user["last name"]);
// console.log( typeof user.sym);  /*   y the line 12 vle k lie  */
/* if interviewe ek symbol lo usko object keys me add kro aur print krke dikhe do output symbol me aane chaie  

lekin jb hmne typeof kie to  y string m aare hai 

*/
// console.log(user[sym]);  /*  y hai line 13 k lie jo i ab symbol k form m hai  */


/* +++++++++++++++++++++++++++++++++++++++++++++++ change the object value  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

user.Age = 25 
// console.log((user.Age));

/* +++++++++++++++++++++++++++++++++++++++++++++ Freeze +++ means ab koi changes ni hoyege ++++++++++++++++++++++++++++++++++++++ */
// Object.freeze(user)
// user.Age=50 
// console.log(user.Age);     /* value not change bcz we use freeze method  */


user.greeting = function(){
    console.log("Hello user ");
}

user.greeting2 = function(){
    console.log(`hello user ${this.name}, how are you! `);
}

console.log(user.greeting());
console.log(user.greeting2());