// array=[1,2,3,4,5,6,7,8,9,10]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
// }

/* for (let  i= 0; i<=10 ; i++) {
    const element = i;
    if (element==5){
        // console.log(`number ${5} is best `);
    } */
    // console.log(element);
// }

// for (let i = 1; i <=10 ; i++) {
//     console.log(`outer loop: ${i}`);
//      for (let j=1 ; j<=10;j++){
//         //  console.log(`inner loop: ${j} and inner loop ${i}`);
//         console.log(i+ "*"+ j + "=" + i*j)  ;
//      }    
// }


// +++++++++++++++++ Break ++++++++++++++++++++++++++++

// for (let i = 1; i <=10 ; i++) {
//    if(i==5){
//     console.log(" 5 number is detected now ");
//     break
//    }

//    console.log(`Value of i is ${i}`);
// }


// ++++++++++++++++++++++++ Continue+++++++++++++++++++++++++++


for (let i = 1; i <=10 ; i++) {
    if(i==5){
    //  console.log(" 5 number is detected now ");
     continue
    }
 
    // console.log(`Value of i is ${i}`);
 }
 


/* +++++++++++++++++++++++++++++++++++++++++++++++++++ WHILE LOOP ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

let index=0
while (index <=20){
    // console.log(`Value of index is ${index}`);
    index+=1
}

/* ++++++++++++++++++++++++++++++++ Array using while loop ++++++++++++++++++++++++ */

// let array=["apple","mango","chiku","banna"]

// let arr=0 
// while (arr < array.length){
//     console.log(` value is  ${array[arr]}`);
//     arr+=1
// }


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Do while loop +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

let score = 1 

do {
    console.log(`Score is ${score}`);
    score++
}while(score <=10);

/* so in do while kaam phele hote hai condition bd me check hoti  hai */