// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;

do {
  let numero = prompt("Ingrese un numero:");

  if (numero === null) {
    break;
  }

  numero = parseInt(numero);

  if (isNaN(numero)) {
    alert("no es un numero");
    continue;
  }

  suma += numero;
} while (true);

alert(`la suma de los numeros ingresados es: ${suma}`);
