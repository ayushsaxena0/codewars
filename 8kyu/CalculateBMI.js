/*Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */

function bmi(weight, height) {
  let bodyMassIndex = weight / height ** 2;
  if (bodyMassIndex <= 18.5) {
    return "Underweight";
  } else if (bodyMassIndex <= 25.0) {
    return "Normal";
  } else if (bodyMassIndex <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// PREP
// parameters -> integers
// return -> string, simple return
// example -> bmi(80, 1.80) -> 'Normal'
// pseudo code -> calculate bmi, check bmi conditions, return respective string
