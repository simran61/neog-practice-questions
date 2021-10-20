//Here's an API. Create a web app to call this API with your full name and print the response. This could be extended where we ask you to do something with the response. Like add a text, or capitalise etc.

var url=`https://api.funtranslations.com/translate/yoda.json`
var apiURL= url+ "?text=Simran Gangwani"

var userName=document.querySelector('.userName')
var btnShow=document.querySelector('.btn-show')

btnShow.addEventListener('click',()=>{
    fetch(apiURL)
    .then(resp => resp.json())
    // .then(data => console.log(data))
    .then(data => {

        userName.innerText=data.contents.text;        //as per the ques. => just printing name

        // var str=data.contents.text;                      //extension
        // userName.innerText=str.toUpperCase();            //extension to capitalize
        // userName.style.color="red"                       //extension to change color

        // var str=data.contents.text;                              //extension
        // userName.innerText= ` ${str} i am a neog aspirant.`      //extension to add text (method1)

        // var str="Hey I am "+ data.contents.text + "! How are you?";   //extension
        // userName.innerText= str;                                      //extension to add text (method2)
    })
})