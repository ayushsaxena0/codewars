function factorial(n) {
  // 1) Base Case
  if (n === 1) {
    return 1;
  }
  // 2) Recursion call
  return n * factorial(n - 1);
}

/*
    5 * factorial(4) -> 5*24 = 120
      4 * factorial(3) -> 4*6 = 24
        3 * factorial(2) -> 3*2 = 6
          2 * factorial(1) -> 2*1 -> 2
            1
*/

console.log(factorial(5));
