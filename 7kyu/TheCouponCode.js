/*Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false */

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  const current = Date.parse(currentDate);
  const expire = Date.parse(expirationDate);
  console.log(current, expire);
  return enteredCode === correctCode && current <= expire;
}

console.log(checkCoupon("123", "123", "July 11, 2015", "July 10, 2015"));
