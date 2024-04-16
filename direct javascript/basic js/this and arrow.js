// let user= {
//     username:"Tanishq",
//     price : 999,

//     welcomeMessange: function() {
//         /* If we want to use current context we use this keyword current context mean
//         like that username, price
        
//         */
//         console.log(`${this.username} , Welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessange() /*  so yhe tk current context same the  */
// user.username= "Manu"  /* yhe p context change krdie hai  context means -value */
// user.welcomeMessange() /* here value change because we can not harcore the value that's y value change hmne khe the jo bhi current context hai uske andr jo bhi username ki value hai usko print kro */

// console.log(this);





/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


let user= {
    username:"Tanishq",
    price : 999,

    welcomeMessange: function() {
        
        // console.log(`${this.username} , Welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessange() 
// user.username= "Manu"  
// user.welcomeMessange() 

// console.log(this); /* it refers an empty object in node environment kuki abhi global k andr koi context ni hai   */
// 



/*+++++++++++++++++++++++++++++++++++ IMPORTSNT+++++++++++++++++++++++++++ */

/* 
so borwser(like chromw,edge) k andr jb bhi engine run krte hai sbse jyde jo global object hai vo window object hai

browser k andr jo bhi global object hai vo window object hai 
*/





/* +++++++++++++++++++++++++ this run inside the function in node environment +++++++++++++++++++++++++++++++++++++++++++ */


function chai(){
    let username= "Tanishq"
    // console.log(this.username); /* it gives an undefined kuki y object ki trh kaam kr rhe hai  function k andr aake this ni use kr pe rhe hai  */
}
chai()




/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

let tea=function(){
    let name= "Tanishq"
    // console.log(this.name);
}
tea()


/* +++++++++++++++++++++ New Method ++++++++++++++++++++++++++++++++++++ */

let v= () => {
    let name= "Tanishq"
    // console.log(this.name);
}
v()


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// const addtwo = (num1, num2) =>{
//    return num1 + num2 
// } 
// console.log(addtwo(3,4));
// 

//  Note :  If we rap the {} so return keyword is mandatory

/* +++++++++++++++++++++++ +++++++++++++++++++++ Implicit ++++++++++++++++++++++++++++++++*/

// const addtwo = (num1, num2) => (num1 + num2 )
// console.log(addtwo(3,4));

// Note : If we wrap () so return is  keyword not mandatory



/* +++++++++++++++++++++++++++++++++++++++++++++ Impicit object ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


const addtwo = (num1, num2) => ({username:"Tanishq pandey" , price:999})
console.log(addtwo(3,4))