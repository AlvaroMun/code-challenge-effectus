import React, { FC, SyntheticEvent, useContext } from "react";
import { SheetContext } from "../context/SheetContext";
import { getCellValFromCoor, getCellValue, getCellValues } from "./utils";
//@ts-ignore
import { Parser as FormulaParser } from "hot-formula-parser";

/**
 * CellProps is an object with two properties, columnIdentifier and rowIdentifier, both of which are
 * numbers.
 * @property {number} columnIdentifier - The column identifier of the cell.
 * @property {number} rowIdentifier - The row number of the cell.
 */
type CellProps = {
    columnIdentifier: number;
    rowIdentifier: number;
};

/**
 * It renders a table cell with an input element that has an onChange handler that updates the
 * sheetMatrix state in the SheetContext
 * @param {number} columnIdentifier - The column identifier of the cell.
 * @param {number} rowIdentifier - The row number of the cell.
 * @returns A function that returns a function that returns a function that returns a function that
 * returns a function that returns a function that returns a function that returns a function that
 * returns a function that returns a function that returns a function that returns a function that
 * returns a function that returns a function that returns a function that returns a function that
 * returns a function that returns a function that returns a function that returns a function that
 * returns
 */
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
            try {
                const formula = currentCellVal.slice(1);
                const cellValues = getCellValues(formula, sheetMatrix);
                const oprationResult = eval(cellValues);

                inputOnchange(oprationResult);
            } catch (error) {
                inputOnchange("Error: Syntax error or invalid value");
                console.log("error");
            }
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
