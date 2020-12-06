// parse the input into matrix map[[row], [row]]
// save the length of both the map and row
// traverse three to the right, if indexX === maxrowlength => index == 0
// move one down
// check if we are on a tree, add to the counter
// if we are on bottom of the map (indexY === lengthMap), we are done

import fs from "fs";
const map = fs.readFileSync("./input.txt", "utf8").split(/\r?\n/).map(el => el.split(""));
const rowLength = map[0].length;

// solution 1
let rowIndex = 0; 
let treeHits = 0;

for (let columnIndex = 0; columnIndex < map.length - 1; columnIndex++) {
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
function getTreeHits(movesToTheRight:number, movesDown:number) :number {
    let treeHits = 0;
    let rowIndex = 0;
    for (let columnIndex = 0; columnIndex < map.length - movesDown; columnIndex += movesDown) {
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

const movements = [[1,1], [3,1], [5,1], [7,1], [1,2]];
const totalTrees = movements.reduce((acc, moves) => {
    acc = acc === 0 ? getTreeHits(moves[0], moves[1]) : getTreeHits(moves[0], moves[1]) * acc;
    return acc;
}, 0);
console.log(totalTrees);
