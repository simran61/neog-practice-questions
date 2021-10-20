var apiURL= `https://mystery-api.kushanksriraj.repl.co/get`

var showError= document.querySelector('.show-error');
var btnCheck= document.querySelector('.btn-check');

btnCheck.addEventListener('click',()=>{
    fetch(apiURL)
    // .then(res=> res)             //not required
    .then(data => {
        if(data.status === 404){                        // == would also work
            showError.innerText=`error 404, page not found`
        }
        else if(data.status === 401){
            showError.innerText=`error 401, user not logged in`
        }
        else if(data.status === 200){
            showError.innerText=`status code 200, working perfectly !!`

        }
    })
})

