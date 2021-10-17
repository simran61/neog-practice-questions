var userInp= document.querySelector('.userInp');

var btnRed= document.querySelector('.btn-red');
var btnGreen= document.querySelector('.btn-green');
var btnBlue= document.querySelector('.btn-blue');

var result= document.querySelector('.result');

userInp.addEventListener('input', ()=>{
    result.innerText=`${userInp.value}`
})

btnRed.addEventListener('click', ()=>{
    result.style.color="red"
})

btnGreen.addEventListener('click', ()=>{
    result.style.color="green"
})

btnBlue.addEventListener('click', ()=>{
    result.style.color="blue"
})