function decodeNumbers(symbols) {
  let value;
  let ans = 0;
  let ant = 0;

  for(let i = symbols.length - 1 ; i >= 0 ; i--) {
    switch(symbols[i]) {
      case '.': value = 1; break;
      case ',': value = 5; break;
      case ':': value = 10; break;
      case ';': value = 50; break;
      case '!': value = 100; break;
      default: return NaN;
    }

    if(i < symbols.length - 1) {
      if(Math.abs(ant) > value) {
        value *= -1;
      } 
    } 

    ans += value;
    ant = value;
  }

  return ans;
}

console.log(decodeNumbers('...')); // 3
console.log(decodeNumbers('.,')); // 4 (5 - 1)
console.log(decodeNumbers(',.')); // 6 (5 + 1)
console.log(decodeNumbers(',...')); // 8 (5 + 3)
console.log(decodeNumbers('.........!')); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumbers('.;')); // 49 (50 - 1)
console.log(decodeNumbers('..,')); // 5 (-1 + 1 + 5)
console.log(decodeNumbers('..,!')); // 95 (1 - 1 - 5 + 100)
console.log(decodeNumbers('.;!')); // 49 (-1 -50 + 100)
console.log(decodeNumbers('!!!')); // 300
console.log(decodeNumbers(';!')); // 50
console.log(decodeNumbers(';.W')); // NaN