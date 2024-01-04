/*Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello" */

function repeatStr(n, s) {
  return s.repeat(n);
}

// PREP
// parameters -> a string, a number, cannot be empty or -ve
// return -> a string, simple return, cannot be empty
// example -> repeatStr(3, "*") -> '***'
// pseudo code -> take the string parameter, use repeat method, pass the n in argument, return the new string
