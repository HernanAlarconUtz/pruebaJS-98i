// 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
// Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.



alert("Hola Eze, hola Gabi. No me conocen, pero yo a ustedes si");
alert("Quiero jugar un juego");
alert(
  "Durante todo el cursado se han dedicado a hacerle la vida imposible a sus alumnos"
);
alert("Es hora de que ustedes tambien sufran. Que comience el juego");
let numeroAleatorio;

const generarNumero = () => {
  numeroAleatorio = Math.floor(Math.random() * 10000) + 1;
  console.log(numeroAleatorio);
};

const verificarNumero = (event) => {
  event.preventDefault();
  const numeroIngresado = parseInt(document.querySelector("#numero").value);
  if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 10000) {
    alert("Número inválido. Por favor, ingrese un número entre 1 y 10.");
  } else if (numeroIngresado === numeroAleatorio) {
    alert(
      "¡Felicidades! Han adivinado el número, la trampa de oso invertida sobre sus cabezas se a desactivado"
    );
  } else if (numeroIngresado > numeroAleatorio) {
    alert("El número ingresado es mayor que el número mágico.");
    alert("chau cabeza")
  } else {
    alert("El número ingresado es menor que el número mágico.");
    alert("chau cabeza")
  }
};

document
  .querySelector("#botonNumAleatoreo")
  .addEventListener("click", generarNumero);
document
  .querySelector("#formulario")
  .addEventListener("submit", verificarNumero);
