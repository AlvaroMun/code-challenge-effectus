export const getCellValue = (
    columnCoord: number,
    rowCoord: number,
    matriz: string[][] | number[][]
) => {
    return matriz[rowCoord][columnCoord];
};

export const alphabetArr = () => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    return alpha.map((x) => String.fromCharCode(x));
};

const getAlphabetIndex = (alphabetLetter: string) => {
    const alphabet = alphabetArr();
    return alphabet.indexOf(alphabetLetter.toUpperCase());
};

const extractCellCoordinates = (text: string) => {
    return text.split(/[+*\/-]/g);
};

export const getCellValFromCoor = (coord: string, matriz: string[][]) => {
    //for now I assume that it contains A2 format
    const columnCoord = getAlphabetIndex(coord[0]);
    const rowCoord = Number(coord.slice(1)) - 1;
    return matriz[rowCoord][columnCoord] || "0";
};

export const getCellValues = (expression: string, matriz: string[][]) => {
    const operandChar = ["+", "-", "/", "*"];
    const copy = expression;

    const cellCoordinates = copy.split(/[+*\/-]/g);
    const operators = expression
        .split("")
        .filter((val) => operandChar.includes(val));
    console.log({ cellCoordinates, operators });
    const cellValues = cellCoordinates.map((cellCoord) =>
        getCellValFromCoor(cellCoord, matriz)
    );
    console.log({ cellValues });

    let result = [];

    for (let i = 0; i < cellValues.length; i++) {
        result.push(cellValues[i]);
        if (i < operators.length) result.push(operators[i]);
    }

    return result.join("");
};
