// let coding =["js","py","java","cpp","swift"] 

// let value = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// } )

// // console.log(value);


// let nums = [1,2,3,4,5,6,7,8,9] 
// nums.filter(  (num) => num > 4)

// // console.log(nums);



 
let myNums=[1,2,3,4,5,6,6,7,8,9]

let newNums= myNums.filter( (num) => {
    return num> 4
} )

// console.log(newNums);


// ++++++++++++++++++++++++++++++ 2nd Method +++++++++++++++++++++++ 

let nums1 =[] 

nums1.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }

} )
// console.log(newNums); 


let books =[
    {
        title:"Book One",
        Publish:1991,
        price:"200"
    },
    {
        title:"Book two",
        Publish:1993,
        price:"400"
    },
    {
        title:"Book Three",
        Publish:1951,
        price:"600"
    },

    {
        title:"Book four",
        Publish:1998,
        price:"800"
    },
    {
        title:"Book five",
        Publish:1891,
        price:"800"
    },
    
];

let userbooks =books.filter( (bk) => bk.price === "800" )

// console.log(userbooks);
 userbooks = books.filter((bk) => { 
    return bk.Publish >=1990 && bk.price === "800"

})  /* overwrite the one */
// console.log(userbooks); 


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ MAP +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



let numbers=[1,2,3,4,5,6,7,8,9,10]

let newNumbers= numbers.map((num) => num+10)
// console.log(newNumbers);


let nums=[1,2,3,4,5,6,7,8,9,10]

let newNum= numbers.map((num) => { return num+10})  /* when we open scope return is mandatory  */
// console.log(newNum);



/* ++++++++++++++++++ Chaining ++++++++++++++ */

let nu = nums.map( (num)=> num*10) 
             .map( (num) =>num+20 )
             .filter( (num)=> num >=80 )
          

// console.log(nu);
/* chaining is that where we can use 2,3 methods directly 
So first chain result pass to the new chain after that it sores the value in variable 
*/



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ REDUCE ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

let myNums2 =[1,2,3] 

let myTotal = myNums2.reduce(function (acc ,currval){
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
},0) /* jo bhi value dege vha se strt hoge jaise agr 3 dege to  3 se strt hoge */

// console.log(myTotal);



// ++++++++++++++++++++++++ With arrow function +++++++++++++++++++++++++++
let myTotal1 =myNums2.reduce( (acc,curr) => acc+curr , 0)

// console.log(myTotal1);


let shoppingcart =[
    {
        item: "shoes",
        price:1000
    },{
        item: "tshirt",
        price:800
    },
    {
        item: "mobile",
        price:31000
    },
    {
        item: "bag",
        price:1000
    }

]

let totalprice=shoppingcart.reduce((acc,item) => acc+item.price,0)
console.log(totalprice);