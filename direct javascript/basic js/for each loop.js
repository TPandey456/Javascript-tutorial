/* ++++++++++++++++++++++++++++++ For Each loop +++++++++++++++++++++++++ */

let coding =["js","py","java","cpp","swift"]

// coding.forEach( function (item) {
//    console.log(item);
// } )

// in callback we can not use function name kuki y function m chl rhe hai to y apne ap value leke aayege


coding.forEach( (val) => {
    // console.log(val);
} ) /* we can use arrow function here */



// ++++++++++++++++++++++++++ Method-2 ++++++++++++++++++++++++++

function printMe(item){
    // console.log(item);
}
// coding.forEach(printMe)


coding.forEach( (item , index , arr) => {
//   console.log(item,index,arr);
} )



let mycodeing= [
    {
        language : "js",
        price: "10000",

    },

    {
        language : "java",
        price: "10000",
        
    },

    {
        language : "python",
        price: "10000",
        
    },

]

mycodeing.forEach ( (item) => {
   console.log(item.language);
   console.log(item.price);
})