// font-family: 'Poppins', sans-serif;
// font-family: 'Roboto', sans-serif;
// font-family: 'Zen Antique Soft', serif;
// font-family: 'Zen Kurenaido', sans-serif;

var showMsg= document.querySelector('.show-msg');

var btnLeft=document.querySelector('.btn-left');
var btnCenter=document.querySelector('.btn-center');
var btnRight=document.querySelector('.btn-right');

btnLeft.addEventListener('click', left)
btnRight.addEventListener('click', right)
btnCenter.addEventListener('click', center)

function left(){
    showMsg.style.textAlign='left'
    showMsg.style.fontFamily=`'Poppins', sans-serif`
}


function right(){
    showMsg.style.textAlign='right'
    showMsg.style.fontFamily=`'Roboto', sans-serif`
}

function center(){
    showMsg.style.textAlign='center'
    showMsg.style.fontFamily=`'Zen Antique Soft', serif`
}