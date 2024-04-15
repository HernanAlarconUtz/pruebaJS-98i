// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  perimetro() {
    return 2 * (this.alto + this.ancho);
  }

  area() {
    return this.alto * this.ancho;
  }

  mostrarPropiedades() {
    console.log(
      `El alto del rectangulo es: ${this.alto}, el ancho del rectangulo es: ${this.ancho}`
    );
  }

  modificar(newHeight, newWeight) {
    this.alto = newHeight;
    this.ancho = newWeight;
  }
}

const height = parseInt(prompt("Ingrese la altura del rectangulo:"));
const weight = parseInt(prompt("Ingrese el ancho del rectangulo:"));

const rectangulo1 = new Rectangulo(height, weight);

rectangulo1.mostrarPropiedades();

const perimetro = rectangulo1.perimetro();
console.log(`El perimetro del rectangulo es: ${perimetro}`);

const area = rectangulo1.area();
console.log(`El area del rectangulo es: ${area}`);

const newHeight = parseInt(prompt("Ingrese la nueva altura del rectangulo: "));
const newWeight = parseInt(prompt("Ingrese el nuevo ancho del rectangulo: "));

const rectangulo2 = new Rectangulo(newHeight, newWeight);

rectangulo2.mostrarPropiedades();

const perimetro2 = rectangulo2.perimetro();
console.log(`El perimetro del nuevo rectangulo es: ${perimetro2}`);

const area2 = rectangulo2.area();
console.log(`El area del nuevo rectangulo es: ${area2}`);
