import fs from "fs";
const passLines = fs.readFileSync("./input.txt", "utf8").split("\n\n").map(el => el.replace(/\n/g, " "));

const passports = passLines.map(pass => {
    let data:any = {};
    pass.split(" ").map(el => el.split(':')).forEach(atrribute => data[atrribute[0]] = atrribute[1]);
    return data;
})

// part 1
function validation(passport :any) : boolean {
    return "byr" in passport && 
           "iyr" in passport && 
           "eyr" in passport && 
           "hgt" in passport && 
           "hcl" in passport && 
           "ecl" in passport && 
           "pid" in passport;
}
const validPassports = passports.filter(pass => validation(pass));
console.log(validPassports.length);

// part 2
function biggerValidation(passport :any) : boolean {
    if (passport.byr.length !== 4 || Number(passport.byr) < 1920 || Number(passport.byr) > 2002) {
        return false;
    }
    if (passport.iyr.length !== 4 || Number(passport.iyr) < 2010 || Number(passport.iyr) > 2020) {
        return false;
    }
    if (passport.eyr.length !== 4 || Number(passport.eyr) < 2020 || Number(passport.eyr) > 2030) {
        return false;
    }
    const height = passport.hgt.split(/([0-9]+)/);
    if (height[2] === "") {
        return false;
    }
    if (height[2] === "cm" && (height[1] < 150 || height[1] > 193)) {
        return false;
    }
    if (height[2] === "in" && (height[1] < 59 || height[1] > 76)) {
        return false;
    }
    const hairColor = passport.hcl.split("#");
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
const secondValidation = validPassports.filter(pass => biggerValidation(pass));
console.log(secondValidation.length);