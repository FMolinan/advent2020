import fs from "fs";
const instructions = fs.readFileSync("./input.txt", "utf8").split("\r").map(el => el.replace("\n", "")).filter(el => !!el);

function returnPlace(row: string, lowerSeat: number, higherSeat : number) : number {
    const char = row[0];
    const range = Math.floor((higherSeat - lowerSeat) / 2);
    if (char === "F" || char === "L") {
        higherSeat = lowerSeat + range;
    } else if (char === "B" || char === "R") {
        lowerSeat = higherSeat - range;
    }
    if (row.length === 1) {
        return char === "F" ? lowerSeat : higherSeat;
    } else {
        return returnPlace(row.substring(1, row.length), lowerSeat, higherSeat);
    }
}

const places = instructions.map(inst => {
    const row = returnPlace(inst.substr(0, inst.length - 3), 0, 127);
    const column = returnPlace(inst.substr(inst.length - 3, inst.length), 0, 7);
    return {
        row,
        column,
        id: row * 8 + column
    };
})

// part 1
const max = places.reduce((acc, place) => Math.max(acc, place.id), 0)
console.log(max);

// part 2
const positions:number[] = new Array(max).fill(0);
places.forEach(place => positions[place.id] = 1)
positions.forEach((position, idx) => {
    if (position === 0) {
        console.log(`id ${idx} is free`)
    }
})