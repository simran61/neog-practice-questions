var userInp= document.querySelector('.userInp');

var inc= document.querySelector('.inc');
var dcs= document.querySelector('.dsc')

var result= document.querySelector('.result');

var initialSize=32;

inc.addEventListener('click', ()=>{
    initialSize = initialSize+2;
    result.innerText= userInp.value.toUpperCase();
    result.style.fontSize=`${initialSize}px`
    
})

dcs.addEventListener('click', ()=>{
    initialSize = initialSize-2;
    result.innerText= userInp.value.toUpperCase();
    result.style.fontSize=`${initialSize}px`
})
