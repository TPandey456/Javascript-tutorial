// let buttons=document.querySelectorAll('.button')
// // console.log(buttons);

// let body=document.querySelector("body")

// // console.log("buttons",buttons)
// // console.log(body); 

// buttons.forEach((button)=> {
// // console.log(button);
// button.addEventListener("click",function(e) {
//     // console.log(e);
//     // console.log(e.target);
//     if (e.target.id === "grey"){
//         body.style.backgroundColor=e.target.id;
//     }
//     if (e.target.id === "yellow"){
//         body.style.backgroundColor=e.target.id;
//     }
//     if (e.target.id === "blue"){
//         body.style.backgroundColor=e.target.id;
//     }
//     if (e.target.id === "green"){
//         body.style.backgroundColor=e.target.id;
//     }
// })
// });


let button = document.querySelectorAll(".button")

let body = document.querySelector("body") 

button.forEach(button => {
    // console.log(button);
    button.addEventListener("click",function(e) {
          if(e.target.id === "grey"){
            body.style.backgroundColor=e.target.id  
          }
    })
});