// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// Ejemplo:

// Input: Hola mundo

// Output: la vocal ‘o’ está en la posición 1

let texto = prompt("Ingrese un texto: ");
texto = texto.toLowerCase();
const vocales = "aeiouáéíóúäöü";
let vocal = "";
let contadorVocales = 0;

for (let i = 0; i < texto.length; i++) {
  const caracter = texto.charAt(i);
  if (vocales.includes(caracter)) {
    vocal = i;
    contadorVocales++;
    break;
  }
}

if (contadorVocales === 0) {
  document.write("No hay vocales en el texto");
} else {
  document.write(
    `la vocal "${texto.charAt(vocal)}" esta en la posicion ${vocal}`
  );
}
