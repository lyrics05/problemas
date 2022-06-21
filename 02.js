/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function masFrecuente(array) {
  // La funcion llamada 'masFrecuente' recibe como argumento un array de numeros enteros
  // y debe devolver el número entero que mas veces aparece (el más frecuente).
  // ej:
  // masFrecuente([1,1,2,3,4]) => 1
  // masFrecuente([3,2,3,2,3,3]) => 3
  // Nota: Los numeros pueden NO estar ordenados

  // Tu código aca:
  let variable = 0;
  let contador = 0;
  let cuenta = 0;
  nuevoarray = array.map(function(p) {
      cuenta = 0
      array.map(function(x) {
          if (p == x) { cuenta++ }
      })
      if (cuenta > contador) {
          contador = cuenta;
          variable = p;
      }
    })
    return variable
}

// No modifiques nada debajo de esta linea //

module.exports = masFrecuente