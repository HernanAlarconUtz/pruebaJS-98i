// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

function calcularPerimetro(ladoA, ladoB) {
  const perimetro = 2 * (ladoA + ladoB);
  return perimetro;
}

let ladoA;
let ladoB;

do {
  ladoA = parseInt(prompt("Ingrese el valor del lado A del rectangulo:"));
  ladoB = parseInt(prompt("Ingrese el valor del lado B del rectangulo:"));
  if (isNaN(ladoA) || isNaN(ladoB) || ladoA <= 0 || ladoB <= 0) {
    alert(
      "Los valores ingresados no pueden ser negativos o iguales a cero. Por favor, inténtelo de nuevo."
    );
  }
} while (isNaN(ladoA) || isNaN(ladoB) || ladoA <= 0 || ladoB <= 0);

let resultado = calcularPerimetro(ladoA, ladoB);

alert(
  `El perimetro del rectangulo con lado A = ${ladoA} y lado B = ${ladoB}, es igual a  ${resultado}`
);
