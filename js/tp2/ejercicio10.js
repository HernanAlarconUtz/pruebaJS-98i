// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let filas = parseInt(prompt("Ingrese un numero de filas: "));
let columnas = parseInt(prompt("Ingrese el numero de columnas: "));
let celdas = filas * columnas;
document.write("<table border='1'>");
let numero = celdas;

if (isNaN(filas, columnas)) {
  alert("No ingreso un numero");
} else {
  for (let i = 1; i < filas; i++) {
    document.write("<tr>");
    for (let j = 0; j < columnas; j++) {
      document.write("<td>" + numero + "</td>");
      numero--;
    }
    document.write("</tr>");
  }
}
document.write("</table>");
