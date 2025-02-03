/*Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion. */

function greatestCommonDivisor(a, b) {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
}

/*
  greatestCommonDivisor(24,18) -> 6
    greatestCommonDivisor(18,6) -> 6
      greatestCommonDivisor(6,0) -> since b === 0 -> return 6
*/

console.log(greatestCommonDivisor(24, 18));
