// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
  constructor(isbn, titulo, autor, numeroDePaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numeroDePaginas = numeroDePaginas;
  }

  mostrarLibro() {
    console.log(
      `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numeroDePaginas} paginas`
    );
  }
}

function pedirNumero(mensaje) {
  let numero;
  do {
    numero = parseInt(prompt(mensaje));
    if (isNaN(numero) || numero <= 0) {
      alert("Número inválido. Por favor, ingrese un número válido.");
    }
  } while (isNaN(numero) || numero <= 0);
  return numero;
}

alert("Libro 1");
const isbn1 = prompt("Ingrese el ISBN del libro:");
const title = prompt("Ingrese el nombre del libro:");
const author = prompt("Ingrese el nombre del autor:");
const numPage = pedirNumero("Ingrese el numero de paginas:");
alert("Libro 2");
const isbn2 = prompt("Ingrese el ISBN del libro:");
const title2 = prompt("Ingrese el nombre del libro:");
const author2 = prompt("Ingrese el nombre del autor:");
const numPage2 = pedirNumero("Ingrese el numero de paginas:");

const libro1 = new Libro(isbn1, title, author, numPage);
const libro2 = new Libro(isbn2, title2, author2, numPage2);
libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.numeroDePaginas > libro2.numeroDePaginas) {
  console.log(`${libro1.titulo} tiene mas pagianas que ${libro2.titulo}`);
} else if (libro1.numeroDePaginas < libro2.numeroDePaginas) {
  console.log(`${libro2.titulo} tiene mas pagianas que ${libro1.titulo}`);
} else {
  console.log("Ambos libros tienen el mismo numero de paginas");
}
