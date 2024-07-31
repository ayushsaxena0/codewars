/*There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop. */

var number = function (busStops) {
  let peopleGetOnBus = 0;
  let peopleGetOffBus = 0;
  busStops.forEach((item, index) => {
    peopleGetOnBus += item[0];
    peopleGetOffBus += item[1];
  });
  let remainingPeople = peopleGetOnBus - peopleGetOffBus;
  return remainingPeople;
};

// PREP
// parameters -> given a array which contains arrays each containing two elements, can not be negative or empty
// return -> a number, should not be negative, can be zero, simple return
// example -> number([[10,0],[3,5],[5,8]]) -> 5
// pseudo code -> loop through the array, get the 0th element of each array and store it in variable(num1), similarily get the 1st index element of each array and store it, get the diff. b/w two , return the diff.
