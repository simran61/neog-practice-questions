var showAge = document.querySelector('.show-age');
var showName = document.querySelector('.show-name');

var btnFetch = document.querySelector('.btn-fetch');

var apiURL = `https://randomuser.me/api/?results=10`

btnFetch.addEventListener('click', () => {
    fetch(apiURL)
        .then(resp => resp.json())
        // .then( data=> console.log(data.results))
        .then(data => {
            for (var i = 0; i < data.results.length; i++) {
                if (data.results[i].dob.age >= 45) {
                    var myColor = "green";
                    console.log(data.results[i].dob.age)
                } else if (data.results[i].dob.age < 45) {
                    myColor = "black"
                }

                showAge.innerHTML += `<p style="color:${myColor}">${data.results[i].dob.age} </p>`;
                showName.innerHTML += `<p>${data.results[i].name.first} </p>`;




            }
        })
})