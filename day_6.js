function sumPairs(numbers, result) {
  for(let i = 0 ; i < numbers.length ; i++) {
    for(let j = i + 1 ; j < numbers.length ; j++) {
      if(numbers[i] + numbers[j] === result) {
        return [numbers[i], numbers[j]];
      }
    }
  }

  return null;
}

sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 2, 3, 1], 4) // [2, 2]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]