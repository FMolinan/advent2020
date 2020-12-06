import fs from "fs";
const passLines = fs.readFileSync("./input.txt", "utf8").split("\n\n").map(el => el.replace(/\n/g, " "));

// part 1
const answers = passLines.reduce((acc, list) => {
    const values = new Set(list.replace(/ +/g, "").split(""));
    acc += values.size;
    return acc;
},0)

console.log(answers);

// part 2
function checkIntersection(arr1:string[], arr2:string[]):string[] {
    return arr1.filter(val => arr2.includes(val));
}

const secondAnswers = passLines.reduce((acc, list) => {
    const valuesList = list.split(" ");
    const intersection = valuesList.reduce((val:string[], subList, idx) => {
        return idx === 0 ? subList.split("") : checkIntersection(val, subList.split(""));
    }, [])
    return acc + intersection.length;
}, 0)

console.log(secondAnswers);