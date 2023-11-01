function canMouseEat(direction, game) {
  const position = {
    row: -1,
    column: -1
  };

  for(let i = 0 ; i < game.length ; i++) {
    for(let j = 0 ; j < game[i].length ; j++) {
      if(game[i][j] === 'm') {
        position.row = i;
        position.column = j;
      }
    }
  }

  if(direction === 'up') {
    position.row -= 1;
  } else if(direction === 'down') {
    position.row += 1;
  } else if(direction === 'right') {
    position.column += 1;
  } else if(direction === 'left') {
    position.column -= 1;
  } else {
    return false;
  }

  if(position.row < 0 || position.column < 0) {
    return false;
  } 

  if(game[position.row] === undefined) {
    return false;
  } else if(game[position.row][position.column] === '*') {
    return true;
  }

  return false;
}

let room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

// console.log(canMouseEat('up',    room));   // false
// console.log(canMouseEat('down',  room));   // true
// console.log(canMouseEat('right', room));   // false
// console.log(canMouseEat('left',  room));   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

// console.log(canMouseEat('up',    room2));   // false
// console.log(canMouseEat('down',  room2));   // false
// console.log(canMouseEat('right', room2));   // true
// console.log(canMouseEat('left',  room2));   // false

room = [
  [' ', '*', ' '],
  ['*', ' ', '*'],
  ['m', '*', ' ']
]

console.log(canMouseEat('up',    room));   // false
console.log(canMouseEat('down',  room));   // true
console.log(canMouseEat('right', room));   // false
console.log(canMouseEat('left',  room));   // false