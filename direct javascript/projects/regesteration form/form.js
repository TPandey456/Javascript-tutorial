let first = document.querySelector('.first')
let submit= document.querySelector('#subt')

submit.addEventListener('click',function(e){
    e.preventDefault()
    if (isNaN(first)){
       alert("Enter a valid name")
    }
})

