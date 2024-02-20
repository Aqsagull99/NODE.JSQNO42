// QNO:42

// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function showmagicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function makegreat(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}


let magicians: string[] = ["ali raza", "sharukh ", "sabir ali", "mian afzal rasheed"];


magicians = makegreat(magicians);


showmagicians(magicians);

