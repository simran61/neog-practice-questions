var num1= document.querySelector('.num1');
var num2= document.querySelector('.num2');

var btnAdd= document.querySelector('.btn-add');
var btnSub= document.querySelector('.btn-sub');
var btnMul= document.querySelector('.btn-mul');
var btnDiv= document.querySelector('.btn-div');

var showOutput= document.querySelector('.show-output');

btnAdd.addEventListener('click', add)
btnSub.addEventListener('click', sub)
btnMul.addEventListener('click', mul)
btnDiv.addEventListener('click', div)

var result=0;

function add() {
    result= Number(num1.value)+Number(num2.value)
    showOutput.innerText= `Your result is ${result}`
}

function sub() {
    result= Number(num1.value)-Number(num2.value)
    showOutput.innerText= `Your result is ${result}`
}

function mul() {
    result= Number(num1.value)*Number(num2.value)
    showOutput.innerText= `Your result is ${result}`
}

function div() {
    result= Number(num1.value)/Number(num2.value)
    showOutput.innerText= `Your result is ${result}`
}