//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

alert("1) un mensaje");

//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

document.write("2) Hola mundo", "<br>");

//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

document.write("3) 3+5 = ", 3 + 5, "<br>");

//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

const nombreUsuario = prompt("4) ingrese su nombre");
document.write("4) Hola ", nombreUsuario, "<br>");

//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

const primerNumero = parseInt(prompt("5) ingrese un numero"));
const segundoNumero = parseInt(prompt("5) ingrese otro numero"));
document.write("5) Resultado ", primerNumero + segundoNumero, "<br>");

//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

const num1 = parseInt(prompt("6) Ingrese un numero"));
const num2 = parseInt(prompt("6) ingrese otro numero"));
let mayor;

if (num1 > num2) {
  mayor = num1;
} else if (num2 > num1) {
  mayor = num2;
} else {
  mayor = "los numeros son iguales";
}

document.write("6) El numero mayor es: ", mayor, "<br>");

//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const numero1 = parseInt(prompt("7) Ingrese un numero"));
const numero2 = parseInt(prompt("7) ingrese un segundo numero"));
const numero3 = parseInt(prompt("7) ingrese un tercer numero"));
let mayorDeTres;

if (numero1 >= numero2 && numero1 >= numero3) {
  mayorDeTres = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
  mayorDeTres = numero2;
} else {
  mayorDeTres = numero3;
}

document.write("7) El numero mayor de los tres ingresados es: ", mayorDeTres, "<br>");

//8.- Escribe un programa que pida un número y diga si es divisible por 2

const numero = parseInt(prompt("8)Ingrese un numero: "));

if (numero % 2 === 0) {
    document.write("8) El numero ", numero," es divisible por 2");
} else {
    document.write("8) El numero ", numero, " no es divibile por 2");
}

//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)




