// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta.

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

class Cuenta {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  ingresar(deposito) {
    this.saldo += deposito;
  }

  extraer(extraccion) {
    this.saldo -= extraccion;
  }

  informar() {
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: ${this.saldo}`);
  }
}

const cuenta = new Cuenta("Alex", 0)

const deposito = parseInt(prompt("Ingrese el saldo a depositar: "));
cuenta.ingresar(deposito)

const extraccion = parseInt(prompt("Ingrese el saldo a extraer: "));
cuenta.extraer(extraccion)

cuenta.informar()