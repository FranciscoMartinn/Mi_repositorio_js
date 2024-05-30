/*--FUNCION--*/

const saludar = (nombre) => {
    console.log ("Hola, " + nombre + "!")
};

let nombreIngresado = prompt ("Ingresa tu nombre");
saludar(nombreIngresado);


let edad = prompt("Ingresa tu edad");

if (edad <= 10) {
    console.log("Sos un nene, no podes ingresar, vete a jugar!");
} else if (edad <= 18) {
    console.log("Bienvenido jovencito, espero disfrute de PIZZA HOUSE!");
} else if (edad <= 29) {
    console.log("Bienvenido joven, espero disfrute de PIZZA HOUSE!");
} else if (edad >= 30) {
    console.log("Bienvenido señor, espero disfrute de PIZZA HOUSE!");
};


let cantidadPizza = parseInt(prompt("Ingrese la cantidad de pizzas que desee"));
let x = 1;
while (x <= cantidadPizza) {
    let pizza = prompt("Ingrese el nombre de la pizza que desee");
    console.log(x + ": " + pizza);
    x = x + 1;
};

/*--OBJETO--*/

const usuario1 = {
    nombre: "Francisco",
    apellido: "Martin",
    edad: 21,
    pais: "Argentina",
    lenguajes: {
        lenguaje1: "HTML",
        lengujae2: "CSS",
        lenguaje3: "JS",
    }
};

usuario1["edad"],
console.log(usuario1.edad);

usuario1.localidad = "General Alvear";
console.log(usuario1);

/*--ARRAY--*/

let productos = ["Muzzarella", "Especial", "Calabresa", "Rucula"];

productos.push("Cebolla Caramelizada");
console.log(productos);

console.log(productos.length);

/*---MODO OSCURO---*/

let btnColorMode = document.querySelector("#color-mode");

btnColorMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        btnColorMode.innerText = "🌞"
    } else {
        btnColorMode.innerText = "🌙"
    }
})

