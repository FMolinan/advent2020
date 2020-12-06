"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var numberList = fs_1.default.readFileSync("./input.txt", "utf8").split(/\r?\n/).map(function (el) { return Number(el); }).filter(function (el) { return el < 2000 && el > 0; });
var numberSet = new Set(numberList);
var numberPairs = [];
numberSet.forEach(function (firstNumber, firstNumberIdx) {
    numberSet.forEach(function (secondNumber, secondNumberIdx) {
        if (firstNumberIdx !== secondNumberIdx) {
            if (firstNumber + secondNumberIdx === 2020) {
                numberPairs.push(firstNumber, secondNumber);
            }
        }
    });
});
var numberSum = Number(numberPairs[0]) * Number(numberPairs[1]);
console.log("answer one: ", numberSum);
var numberTrio = [];
numberSet.forEach(function (firstNumber, firstNumberIdx) {
    numberSet.forEach(function (secondNumber, secondNumberIdx) {
        numberSet.forEach(function (thirdNumber, thirdNumberIdx) {
            if (firstNumberIdx !== secondNumberIdx && secondNumberIdx !== thirdNumberIdx) {
                if (firstNumber + secondNumber + thirdNumber === 2020) {
                    numberTrio.push(firstNumber, secondNumber, thirdNumber);
                }
            }
        });
    });
});
var secondNumberResult = Number(numberTrio[0]) * Number(numberTrio[1]) * Number(numberTrio[2]);
console.log("answer two:", secondNumberResult);
