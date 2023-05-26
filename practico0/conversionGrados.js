///------------------ejercicio 3---------------------------------------
function convertirFahrenheitACelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
  }

///--------------punto a---------------------------------------

let gradosCelsiusA = convertirFahrenheitACelsius(50);
console.log("50 grados Fahrenheit equivalen a " + gradosCelsiusA + " grados Celsius.");

///--------------punto b-----------------------------------------

let gradosCelsiusB = convertirFahrenheitACelsius(75);
console.log("75 grados Fahrenheit equivalen a " + gradosCelsiusB + " grados Celsius.")

