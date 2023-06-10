//--------Ejercicio 3----------------
//-------3.a------------------
let num1 = 5;
let num2 = 6;
let num3 = 7;
let num4 = 3;
//-------3.b-------------------
let resultadoSuma = num1 + num2;
//-------3.c-------------------
let resultadoResta = num3 - num4;
//-------3.d-------------------
let resultadoFinal = resultadoSuma * resultadoResta;
//-------3.e-------------------
let esPar;

if( resultadoFinal % 2 == 0 ) {
    esPar = true;
}

//-------3.f--------------------------

console.log("Mis variables iniciales fueron: " + num1 + ", " + num2 + ", " + num3 + " y " + num4,  ". La respuesta a verificar si el resultado final es par es:", esPar);