/*You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

Examples ( Input --> Output )
121 --> 144
625 --> 676
114 --> -1  #  because 114 is not a perfect square */

// PREP
// parameters -> only integer num, not zero, +ve
// return -> if true(only integer num, not zero, +ve), if false(-1)
// example -> findNextSquare(625) -> 676
// pseudo code -> get sqrt of input num, check if the sqrt is integer(not decimal), if true (sqrt+1)^2 otherwise -1

function findNextSquare(sq) {
  let num = Math.sqrt(sq);
  if (Number.isInteger(num)) {
    return Math.pow(num + 1, 2);
  }
  return -1;
}
