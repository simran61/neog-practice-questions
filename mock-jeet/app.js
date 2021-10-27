var apiURL=`https://mock-practice.prakhar10v.repl.co/bollywood?name=`

var btnYjhd=document.querySelector('.btn-yjhd');
var btnZnmd=document.querySelector('.btn-znmd');


var showOpt=document.querySelector('.show-opt');

btnYjhd.addEventListener('click',showFirst)
btnZnmd.addEventListener('click',showSecond)

// console.log(btnYjhd.innerText)

function showFirst(){
    var url=apiURL+ `${btnYjhd.innerText}`
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        showOpt.innerText= data.message;
    })
}

function showSecond(){
    var url=apiURL+ `${btnZnmd.innerText}`
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        showOpt.innerText= data.message;
    })
}
