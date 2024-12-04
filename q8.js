// You are writing a program for a children's kindergarten school,
// and are given the following list from the teacher of the school:

const grades = [
    { name: "John", grade: 8, sex: "M" },
    { name: "Sarah", grade: 12, sex: "F" },
    { name: "Bob", grade: 16, sex: "M" },
    { name: "Johnny", grade: 2, sex: "M" },
    { name: "Ethan", grade: 4, sex: "M" },
    { name: "Paula", grade: 18, sex: "F" },
    { name: "Donald", grade: 5, sex: "M" },
    { name: "Jennifer", grade: 13, sex: "F" },
    { name: "Courtney", grade: 15, sex: "F" },
    { name: "Jane", grade: 9, sex: "F" },
];

// The teacher has provided you the list above, which contains an object for each child,
// containing the child's name, grade (relating to some homework assignment), and their sex
// (male, female...abbreviated with m/f).
// (Note: to keep this problem simple, the “sex” attribute in the grades list does not include
// all possible gender identities (ex- Non Binary), just M/F. I fully understand that real life
// may not be as simple as this).

// -------------------------------------------------------------------------------------------------------------------------------------
// You need to calculate the following things:

// 1. Create a function called `getBoys`  which returns all the boys. The result should look like this:
const getBoys = (listOfGrades) =>
    listOfGrades.filter((student) => student.sex === "M");

// console.log(getBoys(grades));

// -------------------------------------------------------------------------------------------------------------------------------------
// 2. Create a function called getGirls  which returns all the girls. The result should look like this:
const getGirls = (listOfGrades) =>
    listOfGrades.filter((student) => student.sex === "F");

// console.log(getGirls(grades));

// -------------------------------------------------------------------------------------------------------------------------------------
// 3. Create a function called `average` that calculates the class average for all the students based on their grade. It should return a single number, `93.9` .
const average = (listOfStudents) => {
    const listOfGrades = listOfStudents.map((student) => {
        const { name, grade, sex } = student;
        return grade;
    });
    const calculateAverage = listOfGrades.reduce((acc, next) => {
        return acc + next;
    }, 0);
    return calculateAverage / grades.length;
};

console.log(average(grades));
// -------------------------------------------------------------------------------------------------------------------------------------

// 4. Now calculate the class average of **only the boys** in the class.
const averageBoys = (listOfStudents) => {
    const listOfBoys = getBoys(listOfStudents);
    return average(listOfBoys);
};

console.log(averageBoys(grades));
