// Question 4: Take the following list of numbers `[ 1, -2, 3, -4, 5 ]`
// and send it to a function called `sumPositive`. This function should
// return a value that is the sum of **only the positive numbers**: `9`.
// (Add all the **positive numbers only** in the list and return that final number).
// For this question, you should use two higher order functions: `filter` and `reduce`.

let arr = [1, -2, 3, -4, 5];

const sumPositive = (list) => {
    const filteredList = list.filter((num) => num > 0);
    return filteredList.reduce((acc, next) => {
        return acc + next;
    });
};

console.log(sumPositive(arr));
