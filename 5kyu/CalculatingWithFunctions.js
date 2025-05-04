/*This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
 */

function zero(x) {
  return x ? x(0) : 0;
}
function one(x) {
  return x ? x(1) : 1;
}
function two(x) {
  return x ? x(2) : 2;
}
function three(x) {
  return x ? x(3) : 3;
}
function four(x) {
  return x ? x(4) : 4;
}
function five(x) {
  return x ? x(5) : 5;
}
function six(x) {
  return x ? x(6) : 6;
}
function seven(x) {
  return x ? x(7) : 7;
}
function eight(x) {
  return x ? x(8) : 8;
}
function nine(x) {
  return x ? x(9) : 9;
}

function plus(a) {
  return (b) => b + a;
}
function minus(a) {
  return (b) => b - a;
}
function times(a) {
  return (b) => b * a;
}
function dividedBy(a) {
  return (b) => Math.floor(b / a);
}
