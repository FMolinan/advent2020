"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var instructions = fs_1.default.readFileSync("./input.txt", "utf8").split("\r").map(function (el) { return el.replace("\n", ""); }).filter(function (el) { return !!el; });
function returnPlace(row, lowerSeat, higherSeat) {
    var char = row[0];
    var range = Math.floor((higherSeat - lowerSeat) / 2);
    if (char === "F" || char === "L") {
        higherSeat = lowerSeat + range;
    }
    else if (char === "B" || char === "R") {
        lowerSeat = higherSeat - range;
    }
    if (row.length === 1) {
        return char === "F" ? lowerSeat : higherSeat;
    }
    else {
        return returnPlace(row.substring(1, row.length), lowerSeat, higherSeat);
    }
}
var places = instructions.map(function (inst) {
    var row = returnPlace(inst.substr(0, inst.length - 3), 0, 127);
    var column = returnPlace(inst.substr(inst.length - 3, inst.length), 0, 7);
    return {
        row: row,
        column: column,
        id: row * 8 + column
    };
});
// part 1
var max = places.reduce(function (acc, place) { return Math.max(acc, place.id); }, 0);
console.log(max);
// part 2
var positions = new Array(max).fill(0);
places.forEach(function (place) { return positions[place.id] = 1; });
positions.forEach(function (position, idx) {
    if (position === 0) {
        console.log("id " + idx + " is free");
    }
});
