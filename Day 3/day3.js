"use strict";
// parse the input into matrix map[[row], [row]]
// save the length of both the map and row
// traverse three to the right, if indexX === maxrowlength => index == 0
// move one down
// check if we are on a tree, add to the counter
// if we are on bottom of the map (indexY === lengthMap), we are done
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var map = fs_1.default.readFileSync("./input.txt", "utf8").split(/\r?\n/).map(function (el) { return el.split(""); });
var rowLength = map[0].length;
// solution 1
var rowIndex = 0;
var treeHits = 0;
for (var columnIndex = 0; columnIndex < map.length - 1; columnIndex++) {
    rowIndex += 3;
    if (rowIndex >= rowLength) {
        rowIndex -= rowLength;
    }
    if (map[columnIndex + 1][rowIndex] === "#") {
        treeHits += 1;
    }
}
console.log(treeHits);
// solution 2
function getTreeHits(movesToTheRight, movesDown) {
    var treeHits = 0;
    var rowIndex = 0;
    for (var columnIndex = 0; columnIndex < map.length - movesDown; columnIndex += movesDown) {
        rowIndex += movesToTheRight;
        if (rowIndex >= rowLength) {
            rowIndex -= rowLength;
        }
        if (map[columnIndex + movesDown][rowIndex] === "#") {
            treeHits += 1;
        }
    }
    return treeHits;
}
var movements = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
var totalTrees = movements.reduce(function (acc, moves) {
    acc = acc === 0 ? getTreeHits(moves[0], moves[1]) : getTreeHits(moves[0], moves[1]) * acc;
    return acc;
}, 0);
console.log(totalTrees);
