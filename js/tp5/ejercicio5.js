// Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.

const $cronometroTexto = document.getElementById("cronometro");
const $iniciar = document.getElementById("botonIniciar");
const $reset = document.getElementById("botonReset");
const $pausa = document.getElementById("botonPausa");

$pausa.disabled = true;
$reset.disabled = true;

let intervalo = null;
let cronometroIniciado = false;
let tiempo = 0;

const cronometro = () => {
  intervalo = setInterval(() => {
    tiempo++;
    const horas = Math.floor(tiempo / 3600);
    const minutos = Math.floor((tiempo % 3600) / 60);
    const segundos = tiempo % 60;

    $cronometroTexto.textContent = `${horas}:${minutos}:${segundos}`;
  }, 1000);
};

const habilitarBotones = () => {
  $pausa.disabled = false;
  $reset.disabled = false;
};

const deshabilitarBotones = () => {
  $pausa.disabled = true;
  
};

$iniciar.addEventListener("click", () => {
  if (!cronometroIniciado) {
    cronometro();
    cronometroIniciado = true;
    habilitarBotones();
  }
});

$pausa.addEventListener("click", () => {
  clearInterval(intervalo);
  cronometroIniciado = false;
  deshabilitarBotones();
});

$reset.addEventListener("click", () => {
  clearInterval(intervalo);
  tiempo = 0;
  $cronometroTexto.textContent = "00:00:00";
  cronometroIniciado = false;
  deshabilitarBotones();
});
