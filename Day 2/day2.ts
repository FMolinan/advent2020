import fs from "fs";
const passwordLists = fs.readFileSync("./input.txt", "utf8").split(/\r?\n/).map(el => el.split(" ")).filter(el => el.length === 3);

// Answer 1
const validPasswords = passwordLists.filter(passwordRule => {
    const [min, max] = passwordRule[0].split('-').map(limitNumber => Number(limitNumber));
    const targetLetter = passwordRule[1].split(':')[0];
    const password = passwordRule[2];
    const letterInstances = password.split("").reduce((acc, letter) => {
        if (letter === targetLetter) {
            acc += 1;
        }
        return acc;
    }, 0)
    return letterInstances >= min && letterInstances <= max;
});

console.log(validPasswords.length);

// Answer 2
const secondValidPasswords = passwordLists.reduce((acc, passwordRule) => {
    const [firstPosition, secondPosition] = passwordRule[0].split('-').map(limitNumber => Number(limitNumber));
    const targetLetter = passwordRule[1].split(':')[0];
    const password = passwordRule[2];
    const firstLetter = password[firstPosition - 1];
    const secondLetter = password[secondPosition -1 ];
    if ((firstLetter === targetLetter || secondLetter === targetLetter) && firstLetter !== secondLetter) {
        acc += 1
    }
    return acc;
}, 0);

console.log(secondValidPasswords);