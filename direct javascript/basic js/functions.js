function myname(){
    console.log("Tanishq");
    console.log("Pandey");
}

// myname ------> refernece 

// myname() /* ------> Execution */


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++MEthod-1 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// function number(number1, number2){   /* number1,2 ---> parameter */
//     console.log(number1 + number2);

// }
// // number(3,4)
// // number(3,"4")
// // number(3,"a ")   /* 3,"a" ----> argument */

// let result=number(3,5)
// console.log("result",result);  
/* it gives undefined value , console print krne k mtlb y ni ki vo value return bhi kr rhe hai return k khd concept hai console ek 
console print krne hai   */





/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Method-2++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// function number(number1, number2){   /* number1,2 ---> parameter */
//    /*  let a= number1+number2;
//     return a */
//     return number1 + number2
// }
// let result=number(3,5)

// console.log("Result", result)



/* +++++++++++++++++++++++++++++++  return +++++++++++++++++++++++++++*/

// function login(username){
//     return `${username} just logged In` 
// }
// console.log(login("Tanishq"));


// function login(username){
//     if (username === undefined){    /* ""---> means false ; undefined--> false */
//         console.log("Please enter a username: ");
//         return
//     }
//     return `${username} just logged In` 
// }
// console.log(login());



// function login(username){
//     if (!username){      
//         console.log("Please enter a username: ");
//         return
//     }
//     return `${username} just logged In` 
// }
// console.log(login());





// function login(username){
//     if (username === undefined){
//         console.log("Please enter a username: ");
//         return
//     }
//     return `${username} just logged In` 
// }
// console.log(login());



// function login(username="Tanishq"){
//     if (!username){    /* bydefault in this code username is undefined  but with the help of ! means username is defined   ex username === defined*/
//         console.log("Please enter a username: ");
//         return
//     }
//     return `${username} just logged In` 
// }
// // console.log(login());/* here the output is tanishq  */
// console.log(login("Manu"));    /* it will overwrite the the value and output is manu */



/* +++++++++Rest Spread operator [...] --- if many value pass in argument so that we can use spread operator to access all the calue +++++++++ */


// function calculate(...num1) {
//     return num1
// }
// console.log(calculate(200,300,400));  


function calculate(val1,val2,...num1) {
    return num1
}
// console.log(calculate(200,300,400,500,600));  /* here output is 400,500,600 because start ki do value val1 and val2 m chli gyi h */



// ++++++++++++++++++++++++++++++++++++++++ Object Pass in Function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

let user = {
    username :"Tanishq",
    price : "100"
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)   /* method 1 */ 

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++  METHOD 2 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// handleObject({
//     username:"Manu",
//     price:"400"
// })



/* +++++++++++++++++++++++++++++++++++++++ Array Pass in Function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


let newArray = [100,200,300,400,500]

function returnSecond(get){
    return get[1]
}
// console.log(returnSecond(newArray));/* method 1 */

console.log(returnSecond([600,700,800,900,1000]));  /* method 2 */