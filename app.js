// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');


// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener('click', async function () {

    // 1. Hacer una petición GET a la API que nos ofrece el chiste de Chuck Norris. Existe un método nativo de JavaScript que se llama 'fetch'. En su versión más simple, simplemente le tenemos que pasar como parámetro, la URL de la API que queremos consumir. El método fetch devuelve la respuesta de la API
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    console.log("objeto response", response);
    // 2. Converir el JSON que nos devuelve la API a un tipo de dato que entienda JavaScript (típicamente, será un objeto o un array de objetos)
    const data = await response.json();
    console.log("objeto data", data);


    // 3. Modificar el DOM para mostrar el chiste al usuario
    jokeDIV.textContent = data.value;

});


