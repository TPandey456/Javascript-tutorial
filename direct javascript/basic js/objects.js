//  Singleton 

//  object Literals 

// object literals 
let sym = Symbol("key1")  

// let user ={
//     name: "Tanishq", 
//     "last name": "Pandey",
//     Age : 22, 
//     // sym:"key1",
//     [sym]:"key1",                 /*  ab y symbol objects k  keys m add kie  */
//     city : "Kanpur Nagar",
//     Satate : "Uttar Pradesh",
//     isloggedIn : false ,
//     lastlogin :["Monday" , "Tuesday"]
// }

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

// user.Age = 25 
// console.log((user.Age));

/* +++++++++++++++++++++++++++++++++++++++++++++ Freeze +++ means ab koi changes ni hoyege ++++++++++++++++++++++++++++++++++++++ */
// Object.freeze(user)
// user.Age=50 
// console.log(user.Age);     /* value not change bcz we use freeze method  */


// user.greeting = function(){
//     console.log("Hello user ");
// }

// user.greeting2 = function(){
//     console.log(`hello user ${this.name}, how are you! `);
// }

// console.log(user.greeting());
// console.log(user.greeting2());


let b= {}

b.id= "123abc"
b.name="Tanishq"
b.isloggedIn=false


/* ++++++++++++++++++++++++++++++++++ ASSIGN-- it will combine both obje in single object ++++++++++++++++++++++++++++++++++ */

let z= {1: "a" , 2: "b" , 3:"c"}
let x= {4:"d" , 5:'e' , 6:"f"}

// let m= Object.assign({},z,x) /* {} -- means target and z,x is source */
// console.log(m);


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++ Spread () ++++++++++++++++++++++++++++++++++++++++++++++*/

// let m = {...x, ...z}
// console.log(m);

// +++++++++++++++++++++++++++++++++++++++++++ ARRAY OF Objects ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let user =[
    {
        id:1,
        email: "tanishqpandey456@mail.com"
    },

    {
        id:2,
        email: "manupandey456@mail.com"
    },
    {
        id:3,
        email: "anshikapandey456@mail.com"
    },
]

// console.log(user[1].email);
console.log(b);
console.log(Object.keys(b));
console.log(Object.values(b));
console.log(Object.entries(b));

//++++++++++++++++++++++++++ isLoggedIn --- it will search the property is exist or not in object ++++++++++++++++++++++++++++++++++++++++++++
console.log(b.hasOwnProperty("isloggedIn"));





/* 

1--constructor
: 
ƒ Object()

2 -- hasOwnProperty
: 
ƒ hasOwnProperty()

3---isPrototypeOf
: 
ƒ isPrototypeOf()

4--propertyIsEnumerable
: 
ƒ propertyIsEnumerable()

5---toLocaleString
: 
ƒ toLocaleString()

6--toString
: 
ƒ toString()

7---valueOf
: 
ƒ valueOf()

8----__defineGetter__
: 
ƒ __defineGetter__()

9---__defineSetter__
: 
ƒ __defineSetter__()

10--__lookupGetter__
: 
ƒ __lookupGetter__()

11-----__lookupSetter__
: 
ƒ __lookupSetter__()

12----__proto__
: 
(...)

13---get __proto__
: 
ƒ __proto__()

14----set __proto__
: 

*/