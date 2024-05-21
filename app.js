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


    // // 3. Modificar el DOM para mostrar el chiste al usuario
    jokeDIV.textContent = data.value;

});

// Errores comunes

// 1. No poner bien la URL de la APIs de la cual quieres recibir la información
//  await fetch("https://api.chucknorris.io/jokes/random");

// 2. No saber interpretar el tipo de dato que os viene de la API
// La forma más fácil de interpertar la estructura de datos que te devuelve la API-->
// 1. console.log(data) --> Mostrar por consola los datos de la API antes de hacer nada
// 2. En la página Web de la API, existe documentación con los campos y estructura de datos que devuelve la API

// 3. No usar el ejercicio de chuck norris como base. Esta bien mirar como se hace el fetch en otros ejercicios. No copiar y pegar, escribirlo todo para que se vaya quedando e interorizando

/*
REcordar que deberiamos añadir en el HTML:     <div>
        <label for="keyword">Search by text: </label>
        <input type="text" name="keyword" id="keyword">
    </div>

    Modificar el string de la URL en función de lo que pone el usuario // Tu códgigo aquí
// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');
const keyword = document.querySelector('#keyword');

button.addEventListener('click', async function () {

    // 1. Hacer una petición GET a la API que nos ofrece el chiste de Chuck Norris. Existe un método nativo de JavaScript que se llama 'fetch'. En su versión más simple, simplemente le tenemos que pasar como parámetro, la URL de la API que queremos consumir. El método fetch devuelve la respuesta de la API

    // Recupero el texto que ha introducido el usuario
    const textToSearch = keyword.value;
    console.log("🚀 ~ file: app.js:14 ~ textToSearch:", textToSearch)

    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${textToSearch}`);
    console.log("objeto response", response);
    // 2. Converir el JSON que nos devuelve la API a un tipo de dato que entienda JavaScript (típicamente, será un objeto o un array de objetos)
    const data = await response.json();
    console.log("objeto data", data);


    // // 3. Modificar el DOM para mostrar el chiste al usuario
    jokeDIV.textContent = data.result[0].value;

});

