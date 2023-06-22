const readlineSync = require("readline-sync");
let num = readlineSync.question("Ingrese un numero entero: ");

if (num > 0 && num % 2 == 0) {
    console.log("El numero es positivo y par");
} else if (num > 0 && num % 2 != 0) {
    console.log("El numero es positvo e impar");
} else if (num < 0) {
    console.log("El numero es negativo");
} else {
    console.log("El numero es cero");
}

