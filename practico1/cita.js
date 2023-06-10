//----------------Ejercicio 4 ------------------------
//-------4.a----------------------------------------
let cita = "Tres tristes tigres comen trigo en un trigal" ;

let tamañoDeCita = cita.length ;

let substring = "tigres comen trigo";

console.log("El tamaño de la cita es:", tamañoDeCita);

//-------4.b------------------------------------------

let indice = cita.indexOf(substring); 

console.log("El indice del substring es:", indice);

//--------4.c------------------------------------------

//let indiceC = cita.indexOf(" en un trigal");
//console.log(indiceC);
//estos ultimos los usé para identificar dónde terminaba el slice.

let citaRevisada = cita.slice(0, 31);

console.log("La cita revisada es:", citaRevisada);