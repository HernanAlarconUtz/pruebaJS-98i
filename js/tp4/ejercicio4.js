// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

const productos = [];

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  mostrarDatos() {
    console.log(`${this.codigo} ${this.nombre} ${this.precio} `);
  }
}

const objeto1 = new Producto(12, "Procesador", 1500000);
const objeto2 = new Producto(13, "SSD", 15000);
const objeto3 = new Producto(14, "Placa madre", 10000);

productos.push(objeto1);
productos.push(objeto2);
productos.push(objeto3);

productos.forEach((producto) => {
    producto.mostrarDatos()
  });
