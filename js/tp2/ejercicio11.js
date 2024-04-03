// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

let nombre1 = prompt("Ingrese el primer nombre: ");
let edad1 = parseInt(prompt("Ingrese la primera edad: "));
let nombre2 = prompt("Ingrese el Segundo nombre: ");
let edad2 = parseInt(prompt("Ingrese la segunda edad: "));
let nombre3 = prompt("Ingrese el tercer nombre: ");
let edad3 = parseInt(prompt("Ingrese la tercera edad: "));
let mayorEdad = Math.max(edad1, edad2, edad3);
let nombreMayor;

if (mayorEdad === edad1) {
  nombreMayor = nombre1;
} else if (mayorEdad === edad2) {
  nombreMayor = nombre2;
} else {
  nombreMayor = nombre3;
}

document.write(`El mayor es ${nombreMayor} con ${mayorEdad} años`);
