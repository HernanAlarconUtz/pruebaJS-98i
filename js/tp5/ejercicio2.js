// 2- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }

  mostrarGeneracion() {
    if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
      alert(
        `${this.nombre} es parte de las 7.800.000 personas que pertenecen a la GENERACION Z. Las personas de esta generacion vivieron la expansión masiva del intertnet. Suelen ser bastante irreverentes </br>`
      );
    } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
      alert(
        `${this.nombre} es parte de las 7.200.000 personas que pertenecen a la GENERACION Y tambien llamados MILLENIALS. Las personas de esta generacion vivieron el inicio de la digitalización. Suelen estar frustrados todo el tiempo </br>`
      );
    } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
      alert(
        `${this.nombre} es parte de las 9.300.000 personas que pertenecen a la GENERACION X. Las personas de esta generacion vivieron la crisis del 73 y la transición española. Estas personas estan obsesionadas por el exito</br>`
      );
    } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
      alert(
        `${this.nombre} es parte de las 12.200.000 personas que pertenecen a la BABY BOOM. Las personas de esta generacion vivieron la paz y explosión demografica. Estas personas suelen ser muy ambiciosas</br>`
      );
    } else if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
      alert(
        `${this.nombre} es parte de las 6.300.000 personas que pertenecen a la BABY BOOM. Las personas de esta generacion vivieron muchos conflictos belicos. Estas personas suelen ser muy austeras</br>`
      );
    }
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      alert(`${this.nombre} es mayor de edad</br>`);
    } else {
      alert(`${this.nombre} es un bebe todavía</br>`);
    }
  }

  mostrarDatos() {
    alert(
      `Nombre: ${this.nombre} </br> Edad: ${this.edad} </br> DNI: ${this.dni} </br> Sexo: ${this.sexo} </br> Peso: ${this.peso} kg </br> Altura: ${this.altura} cm </br> Año de nacimiento: ${this.añoNacimiento} </br>`
    );
  }
}

const validarNombre = ($field) => {
  if(!$field || !$field.value.trim()) {
    alert("Nombre invalido")
    return false;
  }

  if($field.value.trim().length < 3 || $field.value.trim().length > 10) {
    alert("Nombre invalido")
    return false;
  }

  const regex = /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+$/;
  if (regex.test($field.value)) {
    alert("Nombre invalido")
    return false;
  }
}

const validarNumero = ($field) => {
  if(!$field || !$field.value.trim()) {
    alert("Numero invalido")
    return false;
  }

  if(!isNaN($field.value) || $field.value <= 0) {
    alert("Numero invalido")
    return false;
  } 
}

const $form = document.getElementById("personaForm")
const $inputNombre = document.getElementById("nombreInput")
const $inputEdad = document.getElementById("edadInput")
const $inputDni = document.getElementById("dniInput")
const $inputSexo = document.getElementById("sexoInput")
const $inputPeso = document.getElementById("pesoInput")
const $inputAltura = document.getElementById("alturaInput")
const $inputAñoNacimiento = document.getElementById("añoInput")

let persona;

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validarNombre($inputNombre) || !validarNumero($inputEdad, $inputDni, $inputPeso, $inputAltura, $inputAñoNacimiento)) {
    alert("Revisa los campos")
    return;
  }

  const nombre = $inputNombre.value;
  const edad = $inputEdad.value;
  const dni = $inputDni.value;
  const sexo = $inputSexo.value;
  const peso = $inputPeso.value;
  const altura = $inputAltura.value;
  const añoNacimiento = $inputAñoNacimiento.value;

  persona = new Persona(nombre, edad, dni, sexo, peso, altura, añoNacimiento)

  console.log(persona)

})
// let persona;

// const enviarFormulario = (event) => {
//   event.preventDefault();
//   nombre = document.querySelector("#nombre").value;
//   edad = parseInt(document.querySelector("#edad").value);
//   dni = parseInt(document.querySelector("#dni").value);
//   peso = parseInt(document.querySelector("#peso").value);
//   altura = parseInt(document.querySelector("#altura").value);
//   añoNacimiento = parseInt(document.querySelector("#añoNacimiento").value);

//   if (isNaN(edad) || isNaN(peso) || isNaN(altura) || isNaN(añoNacimiento)) {
//     alert(
//       "Por favor, ingrese valores numéricos válidos para la edad, peso, altura y año de nacimiento."
//     );
//     return;
//   }

//   persona = new Persona(nombre, edad, dni, sexo, peso, altura, añoNacimiento);

//   console.log(persona);

//   limpiarForm();
// };

// const limpiarForm = () => {
//   document.querySelector("#formulario").reset();
//   document.querySelector("#nombre").focus();
// };

// document
//   .querySelector("#formulario")
//   .addEventListener("submit", enviarFormulario);

// document
//   .querySelector("#botonMayorEdad")
//   .addEventListener("click", persona.esMayorDeEdad);

// document
//   .querySelector("#botonMostrarGeneracion")
//   .addEventListener("click", persona.mostrarGeneracion);
