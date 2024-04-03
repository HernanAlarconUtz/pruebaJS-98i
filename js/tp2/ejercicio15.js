//15- Realiza un script que cuente el número de vocales que tiene un texto.*/

let texto = prompt("Ingrese un texto: ");
texto = texto.toLowerCase();
let vocales = 0;

for (let i = 0; i < texto.length; i++) {
  switch (texto[i]) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "á":
    case "é":
    case "í":
    case "ó":
    case "ú":
    case "ä":
    case "ö":
    case "ü":
      vocales++;
      break;
    default:
      break;
  }
}

document.write(`El texto ingresado tiene ${vocales} vocales`)
