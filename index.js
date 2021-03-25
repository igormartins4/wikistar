const personagensContador = document.getElementById("personagens");
const luasContador = document.getElementById("luas");
const planetasContador = document.getElementById("planetas");
const navesContador = document.getElementById("naves");

function swapiGet(param) {
    axios
    .get(`http://swapi.dev/api/${param}`)
    .then(function (response) {
        // handle success
        console.log(response);
        return response.data;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
}