///----------------ejercicio 4-----------------------------------------------------
function calcularPromedio3(x, y, z) {
    let promedio = (x + y + z) / 3;
    return promedio;
  }

  ///--------------------punto a--------------------------------------
  let promedioA = calcularPromedio3(5, 7, 9);
  console.log("El promedio de 5, 7 y 9 es: " + promedioA);

  ///-------------------punto b----------------------------------------
  let promedioB = calcularPromedio3(-2, -3, -8);
  console.log("El promedio de -2, -3 y -8 es: " + promedioB);
  
  ///------------------punto c--------------------------------------------
  let promedioC = calcularPromedio3(-1.2, 5.3, -3.3);
  console.log("El promedio de -1.2, 5.3 y 3-3 es: " + promedioC);
  