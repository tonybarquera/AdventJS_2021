function getMinJump(obstacles) {
  obstacles.sort((a, b) => a - b);

  for(let i = 1 ; i <= obstacles[obstacles.length - 1] ; i++) {
    let ans = true;

    for(let j = 0 ; j <= obstacles[obstacles.length - 1] ; j += i) {
      if(obstacles.includes(j)) { ans = false; }
    }

    if(ans) { return i; }
  }

  return obstacles[obstacles.length - 1] + 1;
}

const obstacles1 = [5, 3, 6, 9, 7];
console.log(getMinJump(obstacles1)) // -> 4

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S------
*/

const obstacles2 = [2, 4, 6, 8, 10]
console.log(getMinJump(obstacles2)) // -> 7

/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

avoidObstacles([1, 2, 3, 5]) // -> 4
avoidObstacles([3, 7, 5]) // -> 3
avoidObstacles([9, 5, 1]) // -> 2
*/