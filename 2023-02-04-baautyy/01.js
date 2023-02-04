/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function mayorMenosMenor(arr) {
  // Obtener del array "arr" el número mayor y el menor. Devuelve la resta entre los mismos
  // NOTA: No utilizar los métodos "min" y "max" de "Math".
  //
  // Tu código:
  let ordenados = arr.sort(function (a, b) {
    return a - b
  });

  let finalIndex = ordenados.length - 1;

  let resultado = ordenados[finalIndex] - ordenados[0];

  return resultado;
};

// No modifiques nada debajo de esta linea //

module.exports = mayorMenosMenor