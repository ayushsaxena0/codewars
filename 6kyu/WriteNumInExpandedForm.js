/*Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0. */

function expandedForm(num) {
  const numArr = String(num).split("");
  const newArr = numArr
    .map((el, i) => {
      return el * Math.pow(10, numArr.length - 1 - i);
    })
    .filter((el) => el !== 0);
  return newArr.join(" + ");
}
