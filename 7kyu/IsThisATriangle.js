/*Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

Examples:

Input -> Output
1,2,2 -> true
4,2,3 -> true
2,2,2 -> true
1,2,3 -> false
-5,1,3 -> false
0,2,3 -> false
1,2,9 -> false  */

// PREP
// parameter -> 3 int values, can be 0, -ve or +ve
// return -> boolean true or false
// example -> isTriangle(1,2,2) -> true
// pseudo code -> check for triangle -> sum of two sides > third side -> a+b>c && b+c>a && c+a>b (for all possibilities)
// if this is true then return true otherwise false.

function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) {
    return true;
  } else {
    return false;
  }
}
