let edad = prompt("Ingresa tu edad");

if (edad <= 10) {
    console.log("Sos un nene, no podes ingresar, vete a jugar!");
} else if (edad <= 18) {
    console.log("Bienvenido jovencito, espero disfrute de PIZZA HOUSE!");
} else if (edad <= 29) {
    console.log("Bienvenido joven, espero disfrute de PIZZA HOUSE!");
} else if (edad >= 30) {
    console.log("Bienvenido señor, espero disfrute de PIZZA HOUSE!");
}


let cantidadPizza = parseInt(prompt("Ingrese la cantidad de pizzas que desee"));
let x = 1;
while (x <= cantidadPizza) {
    let pizza = prompt("Ingrese el nombre de la pizza que desee");
    console.log(x + ": " + pizza);
    x = x + 1;
}