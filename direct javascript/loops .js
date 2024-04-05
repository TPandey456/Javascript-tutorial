// array=[1,2,3,4,5,6,7,8,9,10]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
// }

for (let  i= 0; i<=10 ; i++) {
    const element = i;
    if (element==5){
        // console.log(`number ${5} is best `);
    }
    // console.log(element);
}

for (let i = 1; i <=10 ; i++) {
    console.log(`outer loop: ${i}`);
     for (let j=1 ; j<=10;j++){
        //  console.log(`inner loop: ${j} and inner loop ${i}`);
        console.log(i+ "*"+ j + "=" + i*j)  ;
     }    
}