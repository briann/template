import * as fs from "fs";
import * as path from "path";

import { printMatrix } from "./matrix";

const args = process.argv.slice(2);
if (args.length !== 1) {
    throw new Error("Did not specify an input file.");
}
const inputFile = path.resolve(process.cwd(), args[0]);
const contents = fs.readFileSync(inputFile).toString().split("\n");

let matrix: string[][] = [];
for (let i = 1; i < contents.length; i++) {
    const row = contents[i].split(",");
    matrix.push(row);
}
printMatrix(matrix);
