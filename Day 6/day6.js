"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var passLines = fs_1.default.readFileSync("./input.txt", "utf8").split("\n\n").map(function (el) { return el.replace(/\n/g, " "); });
// part 1
var answers = passLines.reduce(function (acc, list) {
    var values = new Set(list.replace(/ +/g, "").split(""));
    acc += values.size;
    return acc;
}, 0);
console.log(answers);
// part 2
function checkIntersection(arr1, arr2) {
    return arr1.filter(function (val) { return arr2.includes(val); });
}
var secondAnswers = passLines.reduce(function (acc, list) {
    var valuesList = list.split(" ");
    var intersection = valuesList.reduce(function (val, subList, idx) {
        return idx === 0 ? subList.split("") : checkIntersection(val, subList.split(""));
    }, []);
    return acc + intersection.length;
}, 0);
console.log(secondAnswers);
