// let mydate =new Date()
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);

//  date====== OBJECT datatype

// let mynwedate= new Date(2023,0,23)
// console.log(mynwedate.toDateString());

/* month will be start 0 in js means 0 will be jan and 7 will be aug */



// let mynwedate= new Date(2023,0,23,5,3)
// console.log(mynwedate.toLocaleString());

// it will give time and date also  ex-23/1/2023, 5:03:00 am 


let mynwedate= new Date("2023-01-14")
// console.log(mynwedate.toLocaleString());

let timestamp = Date.now()
// console.log(timestamp);
// console.log(mynwedate.getTime());

// console.log(Math.floor(Date.now()/1000)); /* we change the time in seconds with the help of 1000 */


let date = new Date()
// console.log(date);
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getMonth()+1);
// console.log(date.getHours());

// console.log(`$ {date.getMonth()} and the date is`)

date.toLocaleString("default",{
    weekday:"long",
    day:"2-digit",
    month:"short",
})    /* ctrl and space */


