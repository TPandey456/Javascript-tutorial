//  Immediatedly Invoked Function Expressions (IIFE)


//  Interview ans-----global scope k pollution se problem hoti kai bar to jo is global variable k variables , scope hai y jo bhi vha 
// deceleration hai to  unke pollution htene k lie IIFE use kie 


/*  iif jo function immediately execute ho jye / immediately invoed kr dete hai  */








/* if we writted 2 iife the ; semicolon is mandatory after completing 1st function like below example */
(function chai(){     /* named IIFE  */
    
    console.log(`DB Connected`);
}) () ; /* ; is mandatory after function ended  OR () execute jaise hmlog function m last function k name() lgte vaise hi mtlb h*/


/* ++++++++++++++++++++ Arraw function++++++++++++++++++++ */

((name) => {   /* this is an simple IIFE becasue we can not give any name */

    console.log(`DB Two Connected ${name}`);
}) ("Tanishq") /* () - y execute krrhe hai jaise function m last m lgete the execute krne k lie vaise hi  */