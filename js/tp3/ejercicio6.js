// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

function calcularPerimetro(ladoA, ladoB) {
  if (isNaN(ladoA) || ladoA <= 0) {
    return "El valor del lado A no es un numero valido";
  } else if (isNaN(ladoB) || ladoB <= 0) {
    return "El valor del lado B no es un numero valido";
  } else {
    const perimetro = 2 * (ladoA + ladoB);
    return perimetro;
  }
}

let ladoA;
let ladoB;

do {
  ladoA = parseInt(prompt("Ingrese el valor del lado A del rectangulo:"));
  ladoB = parseInt(prompt("Ingrese el valor del lado B del rectangulo:"));
} while (isNaN(ladoA) || isNaN(ladoB) || ladoA <= 0 || ladoB <= 0);

let resultado = calcularPerimetro(ladoA, ladoB);

alert(
  `El perimetro del rectangulo con lado A = ${ladoA} y lado B = ${ladoB}, es igual a  ${resultado}`
);
