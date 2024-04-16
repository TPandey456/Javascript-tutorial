let form = document.querySelector("form")

// this use case will give  empty
// let height=parseInt(document.querySelector('#height').value) /* bine pareseInt k jo bhi value milegi vo string hogi bt hme to int m lene hai to uske lie parseint lgyie jise uske datatype chnj hojie */

form.addEventListener("submit", function(e) {
    e.preventDefault() /* kuki agr kch bhi submit krte hai to vo get or post form m server k pass jate hai bt abhi server k pass to bhej ni rhe hai to islie preverntDefault lge rhe hai  */

    let height=parseInt(document.querySelector('#height').value); /* bine pareseInt k jo bhi value milegi vo string hogi bt hme to int m lene hai to uske lie parseint lgyie jise uske datatype chnj hojie */
    let weight=parseInt(document.querySelector('#weight').value); /* bine pareseInt k jo bhi value milegi vo string hogi bt hme to int m lene hai to uske lie parseint lgyie jise uske datatype chnj hojie */
    let results=document.querySelector('#result') /* bine pareseInt k jo bhi value milegi vo string hogi bt hme to int m lene hai to uske lie parseint lgyie jise uske datatype chnj hojie */
    if (height === "" || height <0 || isNaN(height)) {
        results.innerHTML =` Please give a valid length   ${height}` ; /* result m add krne k lie innerhtml use kie hai  */

    }
    // results.innerHTML=`${height}`

    else if (weight === "" || weight <0 || isNaN(weight)) {
        results.innerHTML =`Please give a valid length ${weight}` ; /* result m add krne k lie innerhtml use kie hai  */

    }
    else{
        let bmi=(weight/ ((height*height) / 10000)).toFixed(2)  /* tofixed means decimal of 2 */
        // show the result 
        if (bmi <= 18.6 ){
            results.innerHTML=`<span>${bmi} UnderWeight</span>`

        }

        else if (bmi >=18.6 && bmi <=24.6){
            results.innerHTML=`<span> ${bmi} Normal Range`
        }

        else{
            results.innerHTML=`<span> ${bmi} Overweight`
            
        }
       

    }
        
})  