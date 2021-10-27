var userPassword=document.querySelector('.user-password');
var btnCheck=document.querySelector('.btn-check');
var showMsg= document.querySelector('.show-msg')

btnCheck.addEventListener('click',passwordChecker)

function passwordChecker() {
    if(userPassword.value.length<10){
        showMsg.innerText="pls enter a strong password"
        showMsg.style.color="red"
    }
    else{
        showMsg.innerText="perfect password"
        showMsg.style.color="green"
    }
}

userPassword.addEventListener('input',countChecker)

function name(params) {
    
}