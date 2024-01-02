/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

function positiveSum(arr) {
  let sum = 0;
  arr.forEach((item) => {
    if (item > 0) {
      sum += item;
    }
  });
  return sum;
}

// PREP
// parameters -> an array, can be empty, only numbers(0,+ve or -ve)
// return -> return a number, should be +ve or 0, simple return
// example -> positiveSum([1,2,3,4,5] -> 15
// pseudo code -> loop through the array, if element > 0, sum += el, return the sum
