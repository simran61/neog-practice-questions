var userInp= document.querySelector('.userInp');
var btnCheck= document.querySelector('.btn-check');
var userOpt= document.querySelector('.userOpt');

btnCheck.addEventListener('click',()=>{
    // userOpt.innerText= userInp.value
    var inp=userInp.value;
    var myArray=inp.split(' ')
    console.log(myArray)
    if(myArray.length % 2 == 0){
        userOpt.style.color='red'
    }else{
        userOpt.style.color='blue'
    }
    userOpt.innerText= myArray.length
})