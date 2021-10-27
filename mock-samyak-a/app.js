var userInp= document.querySelector('.userInp');
var showOutput= document.querySelector('.showOutput');

var left= document.querySelector('.left');
var center= document.querySelector('.center');
var right= document.querySelector('.right');

left.addEventListener('click',()=>{
    showOutput.innerText= userInp.value;
    showOutput.style.textAlign="left"
})

center.addEventListener('click',()=>{
    showOutput.innerText= userInp.value;
    showOutput.style.textAlign="center"
})

right.addEventListener('click',()=>{
    showOutput.innerText= userInp.value;
    showOutput.style.textAlign="right"
})