/* if (true) {
    let a=10
    const b= 20
    var c=20
} */

// console.log(a); /* it gives an error because it will return inside the scope */
// console.log(b); /* it gives an error because it will return inside the scope */
// console.log(c);/* it will give an  value  30 also it will run iutside the function if we declare inside the scopes */


// +++++++++++++++++++++ Var keyword run globally inside the scope and outside the scope both the condintion var keyword is working 


/* 

inside the scope it there is local scope and outside the scope it is an global scope 

Global scope value reflect the  inside the scope  value  BUT inside the block scope value will not reflect the outside the block.

*/

let  a= 900
if (true) {
    let a=10
    const b= 20
    var c=20

    // console.log(a); /* here the output is 10 because of inside the scope */
}

// console.log(a); /* here the output is 900 because of outside the block */



// function one(){
//     let username ="Tanishq"

//     function two(){
//         let website ="youtube"
//         console.log(username);
//     }
//     // console.log(website);/* give an error becase website is define inside the scope  */
//     two() /* uske bd y execute hoge  */
// }
// one()  /* phele y execute hote hai  */

/* line by line code execution hote hai in js so agr phele line m error ajyege
to next line ko execute ni krege 

*/


if (true) {
  let username ="tanishq"
  if (username="tanishq"){
    let website =  " youtube"
    // console.log(username + website);  /* give an iutput tanishqyoutube */
  }   
//   console.log(website); /* gives an error because outside the scope */
}
// console.log(username); /* gives an error because outside the scope  */




/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ METHOD 1 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

addone(5) /* not giving any error  */

function addone(num){
    return num+1 
}

// addone(5)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ METHOD 2 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


addtwo(5) /* it gives an error  because we can initializing in the variable before, also we can access before the decleration  */
let addtwo = function(num){    /* both are function but we cal also say addtwo is an expression  */
    return num + 2
}

// addtwo(5)