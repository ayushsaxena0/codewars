/*Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

function findAverage(array) {
  if (array.length > 0) {
    let sum = array.reduce((acc, c) => acc + c, 0);
    let avg = sum / array.length;
    return avg;
  } else {
    return 0;
  }
}
