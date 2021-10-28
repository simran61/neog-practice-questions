var message= document.querySelector('.message')
var apiURL=`https://national-api.hiteshtalreja.repl.co/api/Stock`
var btncheck= document.querySelector('.btncheck')

btncheck.addEventListener('click',()=>{
    fetch(apiURL)
.then(resp => resp.json())
.then(data => console.log(data))
// .then(data=> {
//     for(let i=0; i<data.product.length; i++){
//         console.log(i)
//         // console.log(data.product[i].product)
//         // message.innerHTML+=`<p>${data.product[i].product} ${data.product[i].quantity}</p>`
//         console.log(data.product[i].product>5000)

//         if(data.product[i].quantity>5000){
            
//         message.innerHTML+=`<p style="color:green;">${data.product[i].product} ${data.product[i].quantity}</p>`
//         }
//         else{
//             message.innerHTML+=`<p style="color:red;">${data.product[i].product} ${data.product[i].quantity}</p>`   
//         }
//     }
// })
})