function pangram(letter) {
  let values = [];
  let cont = 1;

  if(!letter.includes('ñ')) {
    return false;
  }
  
  letter = letter.replace('ñ', '');
  letter = letter.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  for(let i = 0 ; i < letter.length ; i++) {
    const index = letter[i].charCodeAt();
    if(values[index] === undefined) {
      values[index] = true;
    }
  }
  
  for(let i = 97 ; i <= 122 ; i++) {
    if(values[i] === true) {
      cont++;
    }
  }

  return cont === 27;
}

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')); // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibe!')); // true

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')); // false
console.log(pangram('De la a a la z, nos faltan letras')); // false