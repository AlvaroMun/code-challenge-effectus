/**
 * "Given a column and row coordinate, return the value of the cell at that coordinate in the given
 * matriz."
 *
 * The function is generic, meaning it can work with any type of matriz
 * @param {number} columnCoord - The column coordinate of the cell you want to get the value from.
 * @param {number} rowCoord - The row coordinate of the cell you want to get the value from.
 * @param {string[][] | number[][]} matriz - the matriz you want to get the value from
 * @returns The value of the cell in the matriz.
 */
export const getCellValue = (
    columnCoord: number,
    rowCoord: number,
    matriz: string[][] | number[][]
) => {
    return matriz[rowCoord][columnCoord];
};

/**
 * It creates an array of 26 numbers, maps them to their corresponding ASCII character codes, and then
 * returns an array of the characters
 * @returns An array of the alphabet.
 */
export const alphabetArr = () => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    return alpha.map((x) => String.fromCharCode(x));
};

/**
 * It takes a string, converts it to uppercase, and returns the index of that string in the alphabet
 * array
 * @param {string} alphabetLetter - The letter you want to get the index of.
 * @returns The index of the alphabet letter in the alphabet array.
 */
const getAlphabetIndex = (alphabetLetter: string) => {
    const alphabet = alphabetArr();
    return alphabet.indexOf(alphabetLetter.toUpperCase());
};

/**
 * It takes a coordinate (e.g. A2) and a matriz and returns the value of the cell in the matriz that
 * corresponds to the coordinate
 * @param {string} coord - the coordinate of the cell you want to get the value from.
 * @param {string[][]} matriz - the matriz that contains the values
 * @returns A string
 */
export const getCellValFromCoor = (coord: string, matriz: string[][]) => {
    //for now I assume that it contains A2 format
    const columnCoord = getAlphabetIndex(coord[0]);
    const rowCoord = Number(coord.slice(1)) - 1;
    return matriz[rowCoord][columnCoord] || "0";
};

export const hasCellCoordFormat = (str: string) => {
    return /^[A-Za-z]+.*[0-9]+$/.test(str);
};

/**
 * It takes a string expression and a matriz and returns a string expression with the processed values
 * instead of the cell coordinates
 * @param {string} expression - "A1+B1"
 * @param {string[][]} matriz - a 2D array of strings
 * @returns the result of the expression.
 */
export const getProcessedValues = (expression: string, matriz: string[][]) => {
    const operandChar = ["+", "-", "/", "*"];
    const copy = expression;

    const cellCoordinates = copy.split(/[+*\/-]/g);
    const operators = expression
        .split("")
        .filter((val) => operandChar.includes(val));

    const cellValues = cellCoordinates.map((value) => {
        if (hasCellCoordFormat(value)) {
            return getCellValFromCoor(value, matriz);
        }
        return value;
    });

    let result = [];

    for (let i = 0; i < cellValues.length; i++) {
        if (cellValues[i].startsWith("-")) {
            result.push(`(${cellValues[i]})`);
        } else {
            result.push(cellValues[i]);
        }

        if (i < operators.length) result.push(operators[i]);
    }

    return result.join("");
};
