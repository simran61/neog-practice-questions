var userInp= document.querySelector('.userInp');

var heading1= document.querySelector('.heading1');
var heading2= document.querySelector('.heading2');
var heading3= document.querySelector('.heading3');

var result= document.querySelector('.result');

heading1.addEventListener('click',()=>{
    result.innerHTML=`<h1> ${userInp.value} </h1>`
})

heading2.addEventListener('click',()=>{
    result.innerHTML=`<h2> ${userInp.value} </h2>`
})

heading3.addEventListener('click',()=>{
    result.innerHTML=`<h3> ${userInp.value} </h3>`
})