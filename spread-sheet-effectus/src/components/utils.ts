export const getCellValue=(columnCoord:number, rowCoord:number, matriz:string[][] | number [][])=>{
    return matriz[rowCoord][columnCoord];
}

export const alphabetArr=()=>{
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    return alpha.map((x) => String.fromCharCode(x));

}

const getAlphabetIndex=(alphabetLetter:string)=>{
    const alphabet=alphabetArr();
    return alphabet.indexOf(alphabetLetter.toUpperCase());
}

const extractCellCoordinates=(text:string)=>{
    return text.split(/[+*\/-]/g);
}

export const getCellValFromCoor=(coord:string, matriz:string[][])=>{
    //for now I assume that it contains A2 format
    const columnCoord=getAlphabetIndex(coord[0]);
    const rowCoord=Number(coord.slice(1))-1;
    return matriz[rowCoord][columnCoord];
}

export const testSplitOperands=(expression:string)=>{
   //var expression = "7.2*6+3/2-5*6+(7-2)*5";
   const operandChar = ["+", "-", "/", "*"];
let copy = expression;

expression = expression.replace(/[0-9]+/g, "#").replace(/[\(|\|\.)]/g, "");
let cellCoordinates = copy.split(/[+*\/-]/g);
let operators = expression.split('').filter((val)=>operandChar.includes(val));
console.log({cellCoordinates,operators})
/* let result = [];

for(let i = 0; i < numbers.length; i++){
     result.push(numbers[i]);
     if (i < operators.length) result.push(operators[i]);
}

return result; */

}