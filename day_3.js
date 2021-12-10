function isValid(letter) {
  let answer = true;
  let parentesis = 0;
  let ini = -1;

  if(letter.includes('[') || letter.includes('{')) {
    answer = false;
  }

  for(let i = 0 ; i < letter.length ; i++) {
    if(letter[i] === '(') {
      parentesis++;
      ini = i;
    } else if(letter[i] === ')') {
      if(parentesis === 0) {
        answer = false;
      } else {
        parentesis--;
        if(i - ini === 1) {
          answer = false;
        }
      }
    }
  }

  if(parentesis !== 0) {
    answer = false;
  }

  // console.log(answer);
  return answer;
}

isValid("bici coche (balón) bici coche peluche");
isValid("(muñeca) consola bici");
isValid("bici coche (balón bici coche");
isValid("peluche (bici [coche) bici coche balón");
isValid("(peluche {) bici");
isValid("() bici");