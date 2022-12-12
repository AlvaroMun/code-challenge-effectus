import React, { FC } from "react";
import { Cell } from "./Cell";

/**
 * RowProps is an object with two properties, columns and rowIdentifier, where columns is a number and
 * rowIdentifier is a number.
 * @property {number} columns - The number of columns in the row.
 * @property {number} rowIdentifier - This is the unique identifier for the row.
 */
type RowProps = {
    columns: number;
    rowIdentifier: number;
};

/**
 * It renders a table row with a cell for each column
 * @param  {number} columns - The number of columns in the row.
 * @param {number} rowIdentifier - This is the unique identifier for the row.
 *
 * @returns A table row with a cell for each column.
 */
export const Row: FC<RowProps> = ({ columns, rowIdentifier }) => {
    return (
        <tr>
            <td>{rowIdentifier + 1}</td>
            {[...Array(columns).keys()].map((columnNumber) => (
                <React.Fragment key={columnNumber}>
                    <Cell
                        columnIdentifier={columnNumber}
                        rowIdentifier={rowIdentifier}
                    />
                </React.Fragment>
            ))}
        </tr>
    );
};
