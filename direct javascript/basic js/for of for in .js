// +++++++++++++++++++++++++++++++++++++++++++++ For OF ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let arr =[1,2,3,4,5] 

for (const i of arr) {
    // console.log(i);
}

let greetings = "Tanishq Pandey"

for (const greet of greetings) {
    if (greet==" ") {
        continue
    }
    // console.log(`Each character ${greet}`);
}

// +++++++++++++++++++++++++++++++++++++++++++++ Map for of loop   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let map= new Map()
map.set("In","india")
map.set("Fr","France")
map.set("UK","United kingdom")
map.set("In","india")

// console.log(map);
/* it takes only uniques values not duplicates values  */

// for (const key of map) {
//     // console.log(key);
// }

for (const [key,value] of map) {
    // console.log(key, ":-", value);
}


/* ++++++++++++++++++ object for of +++++++++++++++++++ */

let object = {
    "game1" :"NFS",
    "game2" : "Spiderman",
    'game3' : "Superman",
}

/* for (const [key,value] of object) {
    console.log(key, ":-" ,value);/* gives an error */
// }
 

/* so here maps are iterable and object are not iterable  */


/* +++++++++++++++++++++++++ FOR IN +++++++++++++++++++++++ */

let newobject={
    js:"javascript",
    py:"python",
    cpp:"c++",
    swift:"swift"
}

for (const key in newobject) {
    // console.log(`${key} shortcut is for ${newobject[key]}`);
}



let program=["js","cpp","py","rb"]
for (const key in program) {
//    console.log(program[key]);
}

/* in array bydefault array keys are numbers */


/* +++++++++++++++++++++++++++++++++++++++ map for in  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

let map1= new Map()
map.set("In","india")
map.set("Fr","France")
map.set("UK","United kingdom")
map.set("In","india")

for (const key in map1) {
    console.log(key);
}

/* becasue map is not iterable that's y they not print any value */


// Array we use for of loop 
// Object we use for in loop 


