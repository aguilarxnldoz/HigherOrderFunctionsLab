// Question 6: Create a function called `nameLessThanEqualToFour` which takes the following list of people: `[Vitor, Aless, Jin, Emmy, Sol, "Armaan"]`
// and it should return only the people who have a name **less than or equal to 4** letters long. **
// As an exception, if the name is Armaan, his name should pass the test and be allowed into the newly filtered** **list,
// even though his name is greater than 4 letters.**
// So we should see: `["Jin", "Emmy", "Sol", "Armaan"]` in the console.

let arr = ["Vitor", "Aless", "Jin", "Emmy", "Sol", "Armaan"];

const nameLessThanEqualToFour = (list) => {
    let filteredNames = list.filter(
        (validName) => validName.length <= 4 || validName === "Armaan"
    );
    return filteredNames;
};

console.log(nameLessThanEqualToFour(arr));
