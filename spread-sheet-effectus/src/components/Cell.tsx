import React, { FC, SyntheticEvent, useContext } from "react";
import { SheetContext } from "../context/SheetContext";
import { getCellValFromCoor, getCellValue, testSplitOperands } from "./utils";
//@ts-ignore
import { Parser as FormulaParser } from "hot-formula-parser";

type CellProps = {
    columnIdentifier: number;
    rowIdentifier: number;
};

export const Cell: FC<CellProps> = ({ rowIdentifier, columnIdentifier }) => {
    const { sheetMatrix, setSheetMatrix } = useContext(SheetContext);

    //TODO: improve funct
    const inputOnchange = (val: string) => {
        setSheetMatrix((prevState: string[][]) => {
            const newState = [...prevState];
            newState[rowIdentifier][columnIdentifier] = val;
            return newState;
        });
    };

    const onKeyDownAction = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log("keydown");
        let currentCellVal = sheetMatrix[rowIdentifier][columnIdentifier];
        if (event.key === "Enter" && currentCellVal.startsWith("=")) {
            const formula = currentCellVal.slice(1);
            console.log({ formula });
            const formulaParser = new FormulaParser();
            console.log(formulaParser.parse(formula.slice(1)));

            //split formula into cells and operands
            console.log("test", testSplitOperands(formula));

            //get cell val
            console.log(getCellValFromCoor(formula, sheetMatrix));

            /*  console.log(
                "cosito",
                getCellValue(columnIdentifier, rowIdentifier, sheetMatrix)
            ); */
        }
    };

    return (
        <td>
            <input
                type={"text"}
                value={sheetMatrix[rowIdentifier][columnIdentifier]}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    inputOnchange(event.target.value);
                }}
                onKeyDown={onKeyDownAction}
                onSelect={() =>
                    console.log({ columnIdentifier, rowIdentifier })
                }
            ></input>
        </td>
    );
};
