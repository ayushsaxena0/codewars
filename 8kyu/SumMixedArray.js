/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

function sumMix(x) {
  return x.reduce((acc, c) => acc + Number(c), 0);
}

// PREP
// parameters -> an array, can contain strings or numbers
// return -> integer, simple return
// example -> sumMix([9, 3, '7', '3']) -> 22
// pseudo code -> loop over the array, return sum of all elements of the array
