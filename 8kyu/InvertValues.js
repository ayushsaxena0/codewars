/*Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []
You can assume that all values are integers. Do not mutate the input array. */

// PREP
// parameters -> number array, can also be empty
// return -> new array, simple return only
// example -> invert([1,2,3,-1,5]) -> [-1,-2,-3,1,-5]
// pseudo code -> loop through the array, inverse the sign of each element, return the new Array

function invert(array) {
  let newArr = array.map((item) => (item = -item));
  return newArr;
}
