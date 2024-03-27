//  stack (Primitive)-- jo bhi variable declare kie hai uske copy milte hai 
//  Heap (Non-Primitive)-- original value k reference milte hai


let youtube ="tanishqpandey"
let newname=youtube 

newname ="chai "

console.log(youtube);
console.log(newname);


let user1={
    email:"user@gmail.com",
    api:"new@ybl",

}

let user2 = user1

user2.email = 'newuser@gmail.com'

console.log(user1.email)
console.log(user2.email)

// refernce means jo bhi changes krte hai vo original values m krte hai 