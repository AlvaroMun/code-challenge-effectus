import React, { FC, useEffect, useMemo, useState } from "react";
import { SheetContext } from "../context/SheetContext";
import { Row } from "./Row";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";
import { alphabetArr } from "./utils";

/**
 * SheetProps is an object with two properties, columns and rows, both of which are numbers.
 * @property {number} columns - The number of columns in the sheet.
 * @property {number} rows - The number of rows in the sheet.
 */
type SheetProps = {
    columns: number;
    rows: number;
};

/**
 *
 * @param {number} columns - The number of columns in the sheet.
 * @param {number} rows - The number of rows in the sheet.
 * @returns A table with a header and a body.
 */
const Sheet: FC<SheetProps> = ({ columns, rows }) => {
    const matrixCreator = () => {
        return [...Array(rows).keys()].map(() => [...Array(columns).fill("")]);
    };

    const alphabet = useMemo(() => alphabetArr(), []);

    const [sheetMatrix, setSheetMatrix] = useState<string[][]>(() =>
        matrixCreator()
    );

    return (
        <>
            <SheetContext.Provider value={{ sheetMatrix, setSheetMatrix }}>
                <TableHeader headerList={alphabet.slice(0, columns)} />
                <TableBody rows={rows} columns={columns} />
            </SheetContext.Provider>
        </>
    );
};

export default Sheet;
