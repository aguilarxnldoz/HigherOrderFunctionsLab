// Question 5: Create a function called getInitials which takes a string like
// Ronald James Richards Sanderson
// and return the initials: "RJRS".
// This function should use the following functions: .split .map and .join

let str = "Ronald James Richards Sanderson";

const getInitials = (string) => {
    let listOfStrings = string.split(" ");
    let mappedList = listOfStrings.map((firstName) => {
        return firstName.charAt(0);
    });
    return mappedList.join("");
};

console.log(getInitials(str));
