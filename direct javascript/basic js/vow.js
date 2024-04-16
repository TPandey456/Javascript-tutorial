// let ch="TanishqPandey"

// for (let i=0 ; i<ch.length ; i++){
//     let m= ch.substr(i,1) /*  1 means start at 1st position */

//     console.log(m);
// }


let p ="abcde@gmail.com"

for (let i=0 ; i<p.length ; i++){
   let domain=p.substr(6,14)
   console.log("domain: ",domain);

   let username=p.splice(0,"@")
   console.log(username);
}