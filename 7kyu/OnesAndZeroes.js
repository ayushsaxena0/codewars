/*Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4. */

// PREP
// parameter -> array of one and zeroes, should not be empty, any length
// return -> integer, only +ve, normal return
// example -> binaryArrayToNumber([1,0,0,1]) -> 9
// pseudo code ->variable to hold integer, reverse the array, loop through the array, if any element === 1, int += 2^index.

const binaryArrayToNumber = (arr) => {
  let int = 0;
  arr.reverse().forEach((el, index) => {
    if (el === 1) {
      int += 2 ** index;
    }
  });
  return int;
};
