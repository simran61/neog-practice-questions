var first= document.querySelector('.first');
var second= document.querySelector('.second');

var btnAdd= document.querySelector('.btn-add');
var btnSub= document.querySelector('.btn-sub');
var btnMul= document.querySelector('.btn-mul');
var btnDiv= document.querySelector('.btn-div');

var result= document.querySelector('.result');
var ans=0;

btnAdd.addEventListener('click',add)
btnSub.addEventListener('click',sub)
btnMul.addEventListener('click',mul)
btnDiv.addEventListener('click',div)

function add(){
    ans= Number(first.value)+Number(second.value)
    result.innerText=`Your ans is  ${ans}`
}

function sub(){
    ans= Number(first.value)-Number(second.value)
    result.innerText=`Your ans is  ${ans}`
}

function mul(){
    ans= Number(first.value)*Number(second.value)
    result.innerText=`Your ans is  ${ans}`
}

function div(){
    ans= Number(first.value)/Number(second.value)
    result.innerText=`Your ans is  ${ans}`
}