/*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1
2
+
2
2
+
2
2
=
9
1 
2
 +2 
2
 +2 
2
 =9.

 */

function squareSum(numbers) {
  return numbers.reduce((acc, c) => acc + Math.pow(c, 2), 0);
}

console.log(squareSum([0, 3, 4, 5]));
console.log(Math.pow(0, 2));
