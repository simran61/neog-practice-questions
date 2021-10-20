// Here' an API. It will give an error. Write a web app, call this API and read the error message. Show user the error message.

var apiURL= `https://api.funtranslations.com/translate/miion.json`

var showError= document.querySelector('.showError');
var btnCheck= document.querySelector('.btnCheck');

btnCheck.addEventListener('click',()=>{
    fetch(apiURL)
    .then(resp => resp.json())
    // .then(data => console.log(data))

    .then(data => {
        showError.innerText= data.error.message;
        // showError.innerText= "This API has an error " +data.error.code+ " ("+data.error.message+")"       //extension => show error code also
        // showError.style.color="red"                          // extension => change the color

        // showError.innerHTML= `<div>This API has an error <span style="color:red;">${data.error.code} ( ${data.error.message} )</span></div>`                          // extension => change the color of just error code & msg
    })
})