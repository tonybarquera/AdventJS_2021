function canReconfigure(from, to) {
  // ¡No olvides compartir tu solución en redes!
  if(from.length !== to.length) {
    return false;
  }

  let caracteres = [];

  for(let i = 0 ; i < from.length ; i++) {
    if(caracteres[from[i]] === undefined) {
      if(caracteres[to[i]] === undefined) {
        caracteres[from[i]] = to[i];
        caracteres[to[i]] = from[i];
      } else if(caracteres[to[i]] !== caracteres[from[i]]) {
        return false;
      }
    } else {
      if(caracteres[from[i]] !== to[i]) {
        return false;
      }
    }
  }

  return true;
}

let from = 'BAL';
let to   = 'LIB';
console.log(canReconfigure(from, to)) // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

from = 'CON'
to   = 'JUU'
console.log(canReconfigure(from, to)) // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

from = 'MMM'
to   = 'MID'
console.log(canReconfigure(from, to)) // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

from = 'AA'
to   = 'MID'
console.log(canReconfigure(from, to)) // false -> no tiene la misma longitud