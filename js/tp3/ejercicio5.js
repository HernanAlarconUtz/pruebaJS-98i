// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function tipoCadena(cadena){
    if(cadena === cadena.toUpperCase()){
        return "La cadena esta formada solo por mayusculas"
    } else if (cadena === cadena.toLowerCase()){
        return "La cadena esta formada solor por minusculas"
    } else {
        return "La cadena esta formada por una mezcla de mayusculas y minusculas"
    }
}

let cadena = prompt("Ingrese una cadena de texto: ")

alert(tipoCadena(cadena))