// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// Ejemplo:
// Input:
// [‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]

const ciudades = [];

while (true) {
  const ciudad = prompt("Ingrese una ciudad");

  if (ciudad === null || ciudad.trim() === "") {
    alert("Ingrese una ciudad válida");
    break;
  }

  ciudades.push(ciudad);
  continue;
}


if (ciudades.length > 0) {
  document.write(`El arreglo de ciudades tiene ${ciudades.length} elementos`);
  document.write(`</br>. Elemento 1er posicion: ${ciudades[0]}`);
  document.write(`</br>. Elemento 3er posicion: ${ciudades[2]}`);
  document.write(
    `</br>. Elemento ultima posicion: ${ciudades[ciudades.length - 1]}`
  );

  ciudades.push("Paris");
  ciudades[1] = "Barcelona";
  console.log(ciudades)
  document.write(
    `</br>. Elemento ultima posicion: ${ciudades[ciudades.length - 1]}`
  );
  document.write("<h1>Arreglo de ciudades </h1>");
  ciudades.forEach((ciudad) => {
    document.write(`. ${ciudad}</br>`);
  });
} else {
  document.write("No se ingresaron datos");
}
