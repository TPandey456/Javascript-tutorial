//  < -- less

//  >-- greater

// <= less than eqal to 

// >= Greater  than equal to 

//  == comaprsion

//  === comparison and data type check 



// let temp =41 

// if (temp === 41) {
//     console.log("Less than 50");
// } else{
//     console.log();
// }
// console.log("temperature is greater than 50");



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++ let ,var,cost keyord in scope ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

const score = 200 

if(score > 100){
    var power ="Fly"
    // console.log(`User power: ${power}`);
}
// console.log(`User power:  ${power}`);

/* 
inside the loop if we define var power it is working inside and outside both the scope 

but if we define let power so it is only working inside the scope only outside the scope they gice an error 

that's why var keyword is givine issue sometimes

*/


/*  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ && or not ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

let userloggedIn =true 
let debitcard = true 
let loggedInFromGoogle =false
let  loggedInFromemail = true
if (userloggedIn && debitcard ) {
    // console.log("Allow to buy");
}

if (loggedInFromGoogle || loggedInFromemail) {
    // console.log("User logged in ");
}



/* ++++++++++++++++++++++++ SWITCH ++++++++++++++++ */
/* let month =3
switch (month) {
    case 1:
        console.log("Janauary");
        break; 
    case 2:
        console.log("Feberaury");
        break; 
    case 3:
        console.log("March");
        break; 

    default:
        break;
}
 */
/*  in this all case jaise hi koi case true mil jate hai uske bd bhi y check krte hai sare case ko sirf default ko chdke ,  

default ni check krte hai    */


/* let month = "March"
switch (month) {
    case "Jan":
        console.log("1");
        break; 
    case "Feb":
        console.log("2");
        break; 
    case "March":
        console.log("3");
        break; 

    default:
        break;
} */


/* ++++++++++++++++++++++++++++++++++++++++++++++++ without giving any condition +++++++++++++++++++++++++++++++++++++++++++++++ */

// let username="tanishqpandey456@gmail.com"
// let username="" /* in this case output is print else part */

let username=[] /* in this case output is print if part */
if (username) {
    console.log("Got User email");
} else{
    console.log("Don't have user email");
}


// falsy value
// fasle ,0,-0 ,bigint 0n, "" , null, undefined ,NAN -- they all are falsy value or false value 

//  accept the above all are true/truthy ex- [] ,"0" , 'false', " " , {} , function(){}


/* if (username.length===0) {
    console.log("Array is empty");
} */


let emptyobj={}
if (Object.keys(emptyobj).length===0){
//  console.log("Objects is empty");
}

// Nullish Coalescing Operator (??): null defined 

let val1; 

val1= 5??10 
val2 = null ?? 10
val3 =undefined ?? 20
// console.log(val1);
// console.log(val2);
console.log(val3);

/*  agr null k value hai to uski safety  check krte hai  null k basis p kya pata koi program work n kre or aage loi problem aaye to uske lie y design kie gye hai  */




/* +++++++++++++++++++++ Terniary Operator ++++++++++++++++++++++++++ */

// condition ? true: false  

let ice=100 
ice <= 80 ? console.log("Less than 80"): console.log("More than 80");