/*The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray. */

var maxSequence = function (arr) {
  let subArr = [];
  let maxSum = 0;
  let currentSum = 0;
  let start;
  let end;
  arr.forEach((el, i) => {
    currentSum += el;
    if (currentSum >= 0) {
      subArr.push(el);
    } else {
      currentSum = 0;
      subArr = [];
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = arr.indexOf(subArr[0]);
      end = arr.lastIndexOf(subArr[subArr.length - 1]);
    }
  });
  return maxSum;
};

console.log(maxSequence([]));
