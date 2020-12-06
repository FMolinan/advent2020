import fs from "fs";
const numberList = fs.readFileSync("./input.txt", "utf8").split(/\r?\n/).map(el => Number(el)).filter(el => el < 2000 && el > 0);
const numberSet = new Set(numberList);
const numberPairs:Number[] = [];

numberSet.forEach((firstNumber, firstNumberIdx) => {
    numberSet.forEach((secondNumber, secondNumberIdx) => {
        if (firstNumberIdx !== secondNumberIdx) {
            if (firstNumber + secondNumberIdx === 2020) {
                numberPairs.push(firstNumber, secondNumber);
            }
        }
    })
})

const numberSum = Number(numberPairs[0]) * Number(numberPairs[1]);
console.log("answer one: ", numberSum);

const numberTrio:Number[] = [];

numberSet.forEach((firstNumber, firstNumberIdx) => {
    numberSet.forEach((secondNumber, secondNumberIdx) => {
        numberSet.forEach((thirdNumber, thirdNumberIdx) => {
            if (firstNumberIdx !== secondNumberIdx && secondNumberIdx !== thirdNumberIdx) {
                if (firstNumber + secondNumber + thirdNumber === 2020 ) {
                    numberTrio.push(firstNumber, secondNumber, thirdNumber);
                }
            }
        })
    })
})

const secondNumberResult = Number(numberTrio[0]) * Number(numberTrio[1]) * Number(numberTrio[2]);
console.log("answer two:", secondNumberResult);