const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";

function obtenerJugadaComputador() {
    let juego = ["piedra", "papel", "tijera"];
    numPC = Math.floor(Math.random() *3);
    return juego[numPC];
}

let jugadaComputador = obtenerJugadaComputador();

function obtenerJugadaUsuario() {
    const readlineSync = require("readline-sync");
    let jugada = readlineSync.question("Ingrese su jugada ");

    if (jugada === PIEDRA || jugada === PAPEL || jugada === TIJERA) {
        return jugada;
    } else {
        console.log("Su jugada es invalida. Por favor, ingrese piedra, papel o tijera.");
        return obtenerJugadaUsuario();
    }
}

let jugadaUsuario = obtenerJugadaUsuario();

function determinarGanador() {
    if (jugadaComputador === jugadaUsuario) {
        return "empate";
    } else if ( (jugadaComputador === PIEDRA && jugadaUsuario === TIJERA) ||
     (jugadaComputador === TIJERA && jugadaUsuario === PAPEL) || 
     (jugadaComputador === PAPEL && jugadaUsuario === PIEDRA) ) {
        return "Gana la computadora";
     } else {
        return "Gana el usuario";
     }
}

let resultado = determinarGanador();

console.log("La computadora eligio:", jugadaComputador);
console.log("El usuario eligio:", jugadaUsuario);
console.log("El resultado fue:", resultado);



