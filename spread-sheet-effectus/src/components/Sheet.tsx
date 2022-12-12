import React, { FC, useEffect, useMemo, useState } from "react";
import { SheetContext } from "../context/SheetContext";
import { Row } from "./Row";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";
import { alphabetArr } from "./utils";

type SheetProps = {
    columns: number;
    rows: number;
};

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
