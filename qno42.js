// QNO:42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function showmagicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function makegreat(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var magicians = ["ali raza", "sharukh ", "sabir ali", "mian afzal rasheed"];
magicians = makegreat(magicians);
showmagicians(magicians);
