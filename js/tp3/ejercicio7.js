// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function tablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    const producto = numero * i;
    document.write(`${numero} x ${i} = ${producto}</br>`);
  }
}

let numero;
do {
  numero = parseInt(prompt("Ingrese un número: "));

  if (isNaN(numero)) {
    alert("El valor ingresado es una letra, por favor ingrese un numero");
  }
} while (isNaN(numero));

document.write(
  `<h1>La tabla de multiplicar del ${numero} es la siguiente</h1>`
);
tablaMultiplicar(numero);
