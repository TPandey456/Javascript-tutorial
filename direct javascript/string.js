/* let name= "Tanishq"
let count =50 

console.log(` Hello my name is ${name} and my count is ${count}`) */



let gamename=new String('manu-pandey')

// console.log(gamename[0])
// console.log(gamename[2]);
// console.log(gamename.__proto__);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ length ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(gamename.length);
// console.log(gamename.toUpperCase());

// console.log(gamename.charAt(3));

// console.log(gamename.indexOf("u"));


// let x=gamename.substring(0,2)
// console.log(x)z

/* let m=gamename.slice(-7,2)
console.log(m);
 */
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Concat ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



// ++++++++++++++++++++++++ TRIM -- it will remove the spaces from begning and end +++++++++++++++++++++++++++


/* Syntax */

// let result = string.trim()

/* let z = " Hello World  "
let v= z.trim()
console.log(v);
 */
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++replace --  replace the string into new string ++++++++++++++++++++++++++++++++

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "Tanishq");
// console.log(newText);


/* ++++++++++++++++++++++++++++++++++++++++++++++++ replace all () ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//  Method 1
let v=" A blue bottle with a blur liquid is on a blue table Blue" 
// let m= v.replaceAll("blue","green")
// console.log(m);

//  Method 2 

let m=v.replace(/blue/g,"green") /* g means--> global  */
// console.log(m);


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ SUBSTRING() +++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

let z= "Tanishq Pandey"
let p= z.substring(0,10)
console.log(p);


/* +++++++++++++++++++++++++++++++++++++++++++++++++++ SUBSTR() +++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// let z= "Javascript W0rld"
// let p= z.substr(0,10)
// // console.log(p);



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ INDEXOF - -- return the position of first occurences ++++++++++++++++++ */

let a= "Tanishq Pandey"
let d =a.indexOf("Pandey")
// console.log(d);


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ last index of---- it find the last index of word +++++++++++++++++++++++++ */

let am="javascript Word ! Welcome to Word"
let vm= am.lastIndexOf("Word")
console.log(vm);