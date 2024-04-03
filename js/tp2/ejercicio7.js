// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

let numero = parseInt(prompt("Ingrese un numero no mayor a 50:"))

if(isNaN(numero)) {
    alert("No ingreso un numero")
} else {
    if (numero <= 50) {
        for (let i = numero; i >= 1; i--){
            for (let j = 1; j <=i; j++) {
                document.write(i)
            }
            document.write("<br/>")
        }
    } else {
        alert("El numero ingresado no es valido")
    }
}

for (let i = 1; i >= 30; i--){
    
    for(let j = 1; j <= i; j++){
        document.write(i)
    }
    document.write("<br/>")
}