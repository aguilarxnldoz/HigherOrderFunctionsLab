// Question 1: Take the following list of numbers [ 1, 2, 3, 4, 5 ]
// and send it to a function called timesThree.
// This function should return a list that looks like this: [ 3, 6, 9, 12, 15 ]

let arr = [1, 2, 3, 4, 5];
const timesThree = (list) => list.map((num) => num * 3);
console.log(timesThree(arr));
