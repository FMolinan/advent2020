"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var passLines = fs_1.default.readFileSync("./input.txt", "utf8").split("\n\n").map(function (el) { return el.replace(/\n/g, " "); });
var passports = passLines.map(function (pass) {
    var data = {};
    pass.split(" ").map(function (el) { return el.split(':'); }).forEach(function (atrribute) { return data[atrribute[0]] = atrribute[1]; });
    return data;
});
// part 1
function validation(passport) {
    return "byr" in passport &&
        "iyr" in passport &&
        "eyr" in passport &&
        "hgt" in passport &&
        "hcl" in passport &&
        "ecl" in passport &&
        "pid" in passport;
}
var validPassports = passports.filter(function (pass) { return validation(pass); });
console.log(validPassports.length);
// part 2
function biggerValidation(passport) {
    if (passport.byr.length !== 4 || Number(passport.byr) < 1920 || Number(passport.byr) > 2002) {
        return false;
    }
    if (passport.iyr.length !== 4 || Number(passport.iyr) < 2010 || Number(passport.iyr) > 2020) {
        return false;
    }
    if (passport.eyr.length !== 4 || Number(passport.eyr) < 2020 || Number(passport.eyr) > 2030) {
        return false;
    }
    var height = passport.hgt.split(/([0-9]+)/);
    if (height[2] === "") {
        return false;
    }
    if (height[2] === "cm" && (height[1] < 150 || height[1] > 193)) {
        return false;
    }
    if (height[2] === "in" && (height[1] < 59 || height[1] > 76)) {
        return false;
    }
    var hairColor = passport.hcl.split("#");
    if (hairColor.length !== 2 || !hairColor[1].match(/^[0-9a-f]+$/)) {
        return false;
    }
    if (passport.ecl != "amb" &&
        passport.ecl != "blu" &&
        passport.ecl != "brn" &&
        passport.ecl != "gry" &&
        passport.ecl != "grn" &&
        passport.ecl != "hzl" &&
        passport.ecl != "oth") {
        return false;
    }
    if (passport.pid.length !== 9 || !passport.pid.match(/^[0-9]+$/)) {
        return false;
    }
    return true;
}
var secondValidation = validPassports.filter(function (pass) { return biggerValidation(pass); });
console.log(secondValidation.length);
