// Question 3: Take the following list of words `["dog", "cats", "friend", "books" ]`
// and send it to a function called `makePlural` . This function should
// return a list that looks like this:
// `[ "dogs", "cats", "friends", "books" ]`

let arr = ["dog", "cats", "friend", "books"];

const makePlural = (list) => {
    return list.map((thing) => {
        if (thing.slice(-1) !== "s") {
            return `${thing}s`;
        }
        return thing;
    });
};

console.log(makePlural(arr));
