let myArr =[0,1,2,3,4,5,6,7,8,9]
// console.log(myArr[4])

// let myArr =[0,1,2,3,4,5,6,7,8,9]
// let c=["a","b","c","d","e"]
// let d=new Array(1,2,3,4,5)
// console.log(myArr[4])s


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ Array Methods +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let myArr =[0,1,2,3,4,5,6,7,8,9]

//* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ PUSH  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// myArr.push(6)
// console.log(myArr);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Pop +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// myArr.pop()


/* Example of Push or POP using loop */
// myArr.pop()

// for(let i=0 ; i<myArr.length ; i++){
//     console.log(myArr[i]);
// }

// myArr.push(900)
// for(let i=0 ; i<myArr.length ; i++){
//     console.log(myArr[i]);
// }


///* +++++++++++++++++++++++++++++++++++++++++++++++++++++ UNSHIFT +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// myArr.unshift(90)

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ SHIFT +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// myArr.shift()


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ INCLUDEs ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// console.log(myArr.includes(7));  /* it will check the 7 is present in the array or not  */


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ INDEXOF +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// console.log(myArr.indexOf(6));


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ TYPEOF ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let new1=myArr.join()
// console.log(myArr);
// console.log(new1);
// console.log(typeof new1);

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++ Join Function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// let fruits = ["apple","mango","banna","cherry"]
// let str = fruits.join(" + ")
// console.log(str);







// +++++++++++++++++++++++++++++++++++++++++++++++++  Slice , splice ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log("A",myArr)

// let myn1 =myArr.slice(1,4)
// console.log(myn1);  /* y original vli value se slie vli value ni print krte or y origianl vle m koi changes ni krte hai ex  y output slice k bd[ 1, 2, 3 ]
// y original array hai -B [
//   0, 1, 2, 3, 4,
//   5, 6, 7, 8, 9 */
// console.log("B",myArr) 

// let myn2 =myArr.splice(1,4)
// console.log("c",myArr)  
// console.log(myn2);/* y original vle array se splice vli value remove kr dete hai or vhi ans de dete hai  y original array hai --ex c [ 0, 5, 6, 7, 8, 9 ]
// after splice--[ 1, 2, 3, 4 ]
// y original vle array m change krdete hai jaise ki upr ex m hai 
// */



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Array Function +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let fruit = ["apple","mango","cherry","chiku"]

// let dry=["almond","kaju","coconut"]

/* +++++++++++++++++++++++++++++++++++++++++++++++++++ PUSH FUNCTION +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// fruit.push(dry)  /* nested array dege */

// console.log(fruit)
// console.log(fruit[4])

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++ CONCAT FUNCTION +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// let newdry = fruit.concat(dry)
// console.log(newdry);


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++ SPREAD FUNCTION ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* let all_new_dry = [...fruit,...dry] /* it will spread the array work same as concat but here there is not limitation 
but in concatinition there is limitation that only 1 can be use    */
// console.log(all_new_dry);


/* +++++++++++++++++++++++++++++++++++++++++++++++++ FLAT FUNCTION ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// let number = [1,2,3,4, [5,6,7,8] ,9, [10,11,12, [13,14,15,[16,17,18,[19,20,21]]]]]
// let real_number = number.flat(Infinity)
// console.log((real_number));


/* +++++++++++++++++++++++++++++++ IS ARRAY ++++++++++++++++++++++++++++++++++++++++++*/

// console.log(Array.isArray("Tanishq"));

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ FROM ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*  console.log(Array.from("Tanishq")); /* it will split all the character  ex-  'T', 'a', 'n',
'i', 's', 'h', 'q'*/



/* console.log(Array.from({name:"Manu"})); /* it's print empty array because here we can give the keys and values  */



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ SORT +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// let z= ["banna","apple","cherry","mango"]

// // z.sort()  /* asce to desc */
// z.sort() 
// console.log(z);



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++ REVERSE ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

let z= [55,30,10,100,20];

z.sort();
// console.log(z);
// z.reverse()

// for(let i=0 ; i< z.length ; i++)
// {
//     console.log(z[i]);
// }

/* ++++++++++++++++++++++++++++++++++++++++++++++++++ FOREach ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//  SYNTAX -  
//  arrayName.forEach(callback_function (currentItem , index , array){

// })

// let a = [10,20,30,40,50,60,70,80,90]

// a.forEach(function(i){        /* in the palace of i we take any variable  */
//     console.log(i+ " ");
// })




/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ .of +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

let score1 =100 
let score2 = 200 
let score= 300 

// console.log(Array.of(score1,score2,score));   /* we can concate in array  */