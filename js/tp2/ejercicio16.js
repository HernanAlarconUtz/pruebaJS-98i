// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let cadena = prompt("Ingrese un texto: ")
let cadenaReves = ""

for (i = cadena.length - 1; i >= 0; i--) {
    cadenaReves += cadena.charAt(i);
}

document.write(`El texto ingresado al reves es el siguiente: ${cadenaReves}`)