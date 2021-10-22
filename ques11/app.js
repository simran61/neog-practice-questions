// Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input.

var userPassword= document.querySelector('.userPassword');
var showMessage= document.querySelector('.showMessage');
var btnCheck= document.querySelector('.btnCheck');

userPassword.addEventListener('input',()=>{
    if(userPassword.value.length<10){
        showMessage.innerText="pls enter more than 10 characters"
        btnCheck.disabled=true;
        userPassword.style.border="2px solid red"
        userPassword.style.background="yellow"
    }
    else{
        showMessage.innerText=`perfect password`
        btnCheck.disabled=false
        userPassword.style.border="2px solid green"
        userPassword.style.background="none"
    }
})
