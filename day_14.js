function missingReindeer(ids) {
  ids.sort((a, b) => a - b);

  let ans, mit;
  let ini = 0;
  let fin = ids.length;

  while(ini <= fin) {
    mit = ini + Math.ceil((fin - ini) / 2);
    
    if(ids[mit] != mit) {
      ans = mit;
      fin = mit - 1;
    } else if(ids[mit] == mit) {
      ini = mit + 1;
    }
  }
  
  return ans;
}

// ¿Qué pasa que si el número de renos es muy grande no eres capaz de averiguarlo? :P

missingReindeer([2, 0, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0]) // -> 1 (¡es el último el que falta!)