//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

const edad = parseInt(prompt("Ingresá tu edad"));

if (isNaN(edad)) {
  alert("no es un numero");
} else {
  if (edad >= 0 && edad < 100) {
    if (edad >= 18) {
      alert("puede conducir");
    } else {
      alert("no puede conducir");
    }
  } else {
    alert("no es un numero valido");
  }
}
