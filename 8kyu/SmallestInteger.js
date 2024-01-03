/*Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. */

function findSmallestInt(arr) {
  arr.sort((a, b) => a - b);
  return arr[0];
}

// PREP
// parameters ->  an array,  always contain number(+ve/-ve), will not be empty
// return -> return smallest element, simple return
// example -> findSmallestInt([43,1,2,67,4]) -> 1
// pseudo code -> take the input array, sort the array, get the array[0] value, return it
