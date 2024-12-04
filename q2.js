// Question 2: Take the following list of words ["Spiderman", "Batman", "Superman"]
// and send it to a function called makeLi . This function should return a list that looks like this:
// ["<li>Spiderman</li>", "<li>Batman</li>", "<li>Superman</li>"]

let arr = ["Spiderman", "Batman", "Superman"];
const makeLi = (list) => list.map((str) => `<li>${str}<\li>`);
console.log(makeLi(arr));
