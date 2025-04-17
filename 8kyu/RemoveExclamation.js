/*Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */

function removeExclamationMarks(s) {
  const stringArr = s.split("");
  const filteredArr = stringArr.filter((el) => el !== "!");
  return filteredArr.join("");
}
