import React, { FC, SyntheticEvent, useContext } from "react";
import { SheetContext } from "../context/SheetContext";
import {
    getCellValFromCoor,
    getCellValue,
    getProcessedValues,
} from "../utils/utils";
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
 * sheetMatriz state in the SheetContext
 * @param {number} columnIdentifier - The column identifier of the cell.
 * @param {number} rowIdentifier - The row number of the cell.
 * @returns Cell component
 */
export const Cell: FC<CellProps> = ({ rowIdentifier, columnIdentifier }) => {
    const { sheetMatriz, setSheetMatriz } = useContext(SheetContext);

    const setInputValue = (val: string) => {
        setSheetMatriz((prevState: string[][]) => {
            const newState = [...prevState];
            newState[rowIdentifier][columnIdentifier] = val;
            return newState;
        });
    };

    const onKeyDownAction = (event: React.KeyboardEvent<HTMLInputElement>) => {
        let currentCellVal = sheetMatriz[rowIdentifier][columnIdentifier];
        if (event.key === "Enter" && currentCellVal.startsWith("=")) {
            try {
                const formula = currentCellVal.slice(1);

                const cellValues = getProcessedValues(formula, sheetMatriz);
                /* const oprationResult = eval(cellValues); */
                const oprationResult = Function("return " + cellValues)();

                setInputValue(String(oprationResult));
            } catch (error) {
                setInputValue("Error: Syntax error or invalid value");
                console.log("error", error);
            }
        }
    };

    return (
        <td>
            <input
                type={"text"}
                value={sheetMatriz[rowIdentifier][columnIdentifier]}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setInputValue(event.target.value);
                }}
                onKeyDown={onKeyDownAction}
            ></input>
        </td>
    );
};
