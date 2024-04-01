// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let cadenas = "";

do {
  let texto = prompt("Ingrese un texto:");

  if (texto === null) {
    break;
  }
  cadenas += `${texto}-`;
  alert(`El texto fue ${texto}`);
} while (true);

alert(`Los textos ingresados fueron ${cadenas.slice(0,-1)}`);
