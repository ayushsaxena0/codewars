/*Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun! */

// PREP
// parameter -> will be array, can be a empty array
// return -> return "odd" or "even" as a string
// example -> oddOrEven([0,1,4]) -> "odd"
// pseudo code -> take the input array, use reduce() method on it, calculate the sum, check conditionals if sum is divisible by 2 -> "even", not divisible -> "odd", if empty array -> "even", return the string "even" or "odd"

function oddOrEven(array) {
  let sum = array.reduce((acc, c) => acc + c, 0);
  return sum === 0 || sum % 2 === 0 ? "even" : "odd";
}
