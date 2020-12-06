"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var passwordLists = fs_1.default.readFileSync("./input.txt", "utf8").split(/\r?\n/).map(function (el) { return el.split(" "); }).filter(function (el) { return el.length === 3; });
// Answer 1
var validPasswords = passwordLists.filter(function (passwordRule) {
    var _a = passwordRule[0].split('-').map(function (limitNumber) { return Number(limitNumber); }), min = _a[0], max = _a[1];
    var targetLetter = passwordRule[1].split(':')[0];
    var password = passwordRule[2];
    var letterInstances = password.split("").reduce(function (acc, letter) {
        if (letter === targetLetter) {
            acc += 1;
        }
        return acc;
    }, 0);
    return letterInstances >= min && letterInstances <= max;
});
console.log(validPasswords.length);
// Answer 2
var secondValidPasswords = passwordLists.reduce(function (acc, passwordRule) {
    var _a = passwordRule[0].split('-').map(function (limitNumber) { return Number(limitNumber); }), firstPosition = _a[0], secondPosition = _a[1];
    var targetLetter = passwordRule[1].split(':')[0];
    var password = passwordRule[2];
    var firstLetter = password[firstPosition - 1];
    var secondLetter = password[secondPosition - 1];
    if ((firstLetter === targetLetter || secondLetter === targetLetter) && firstLetter !== secondLetter) {
        acc += 1;
    }
    return acc;
}, 0);
console.log(secondValidPasswords);
