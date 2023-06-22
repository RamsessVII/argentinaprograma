const readlineSync = require("readline-sync");
let numMes =readlineSync.question("Elija un mes representandolo por un numero del 1 al 12: ");

let meses = [];
meses[1] = {nombre: "enero", dias: 31};
meses[2] = {nombre: "febrero", dias : 28 };
meses[3] = {nombre: "marzo", dias : 31 };
meses[4] = {nombre: "abril", dias : 30 };
meses[5] = {nombre: "mayo", dias : 31 };
meses[6] = {nombre: "junio", dias : 30 };
meses[7] = {nombre: "julio", dias : 31 };
meses[8] = {nombre: "agosto", dias : 31 };
meses[9] = {nombre: "septiembre", dias : 30 };
meses[10] = {nombre: "octubre", dias : 31 };
meses[11] = {nombre: "noviembre", dias : 30 };
meses[12] = {nombre: "diciembre", dias : 31 };

if (numMes > 12 || numMes < 1) {
    console.log("Su numero esta fuera del rango permitido");
} else {
    console.log("La cantidad de dias del mes de %s es %i", meses[numMes].nombre, meses[numMes].dias);
}

