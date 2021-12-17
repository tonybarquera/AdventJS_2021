function checkSledJump(heights) {
  let ant, cont = 0;

  if(heights[0] >= heights[1]) { return false; }

  for(let i = 1 ; i < heights.length ; i++) {
    const dif = heights[i - 1] - heights[i];

    if(dif === 0) { 
      return false; 
    } else {
      if((dif > 0 && ant < 0) || (ant > 0 && dif < 0)) {
        cont++;
      }
    }

    ant = dif;
  }

  return cont === 1 ? true : false;
}

console.log(checkSledJump([1, 2, 3, 2, 1])); // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])); // -> true: sube y baja de forma estricta

console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])); // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])); // false: sube y baja y sube... ¡no vale!