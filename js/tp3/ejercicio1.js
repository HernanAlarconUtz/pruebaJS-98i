// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Septiembre",
  "Agosto",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

meses.forEach((mes) => {
  document.write(`. ${mes}</br>`);
});
