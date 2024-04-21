// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
  constructor(nombre, edad, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = this.generarDNI();
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }

  mostrarGeneracion() {
    if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
      document.write(
        `${this.nombre} es parte de las 7.800.000 personas que pertenecen a la GENERACION Z. Las personas de esta generacion vivieron la expansión masiva del intertnet. Suelen ser bastante irreverentes </br>`
      );
    } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
      document.write(
        `${this.nombre} es parte de las 7.200.000 personas que pertenecen a la GENERACION Y tambien llamados MILLENIALS. Las personas de esta generacion vivieron el inicio de la digitalización. Suelen estar frustrados todo el tiempo </br>`
      );
    } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
      document.write(
        `${this.nombre} es parte de las 9.300.000 personas que pertenecen a la GENERACION X. Las personas de esta generacion vivieron la crisis del 73 y la transición española. Estas personas estan obsesionadas por el exito</br>`
      );
    } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
      document.write(
        `${this.nombre} es parte de las 12.200.000 personas que pertenecen a la BABY BOOM. Las personas de esta generacion vivieron la paz y explosión demografica. Estas personas suelen ser muy ambiciosas</br>`
      );
    } else if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
      document.write(
        `${this.nombre} es parte de las 6.300.000 personas que pertenecen a la BABY BOOM. Las personas de esta generacion vivieron muchos conflictos belicos. Estas personas suelen ser muy austeras</br>`
      );
    }
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      document.write(`${this.nombre} es mayor de edad</br>`);
    } else {
      document.write(`${this.nombre} es un bebe todavía</br>`);
    }
  }

  mostrarDatos() {
    document.write(
      `Nombre: ${this.nombre} </br> Edad: ${this.edad} </br> DNI: ${this.dni} </br> Sexo: ${this.sexo} </br> Peso: ${this.peso} kg </br> Altura: ${this.altura} cm </br> Año de nacimiento: ${this.añoNacimiento} </br>`
    );
  }

  generarDNI() {
    const numAleatoreo = Math.floor(Math.random() * 100000000);
    return numAleatoreo.toString().padStart(8, "0");
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

const name = prompt("Ingrese el nombre de la persona:");
const age = pedirNumero("Ingrese la edad de la persona:");
const sex = prompt("Ingrese el sexo de la persona");
const weight = pedirNumero("Ingrese el peso de la persona:");
const height = pedirNumero("Ingrese la altura de la persona:");
const yearBirth = pedirNumero("Ingrese el año de nacimiento:");

const persona = new Persona(name, age, sex, weight, height, yearBirth);

persona.mostrarDatos();
persona.mostrarGeneracion();
persona.esMayorDeEdad();
