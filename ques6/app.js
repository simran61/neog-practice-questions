//extension: make the button toggle

var text= document.querySelector('.text')
var btnLoaded= document.querySelector('.btn-loaded')

var state=true;

// btnLoaded.addEventListener('click',()=>{
//         text.style.visibility="hidden"
// })

btnLoaded.addEventListener('click',()=>{
    if(state){
        text.style.visibility="hidden"
        state=false
    }else{
        text.style.visibility="visible"
        state=true
    }
})