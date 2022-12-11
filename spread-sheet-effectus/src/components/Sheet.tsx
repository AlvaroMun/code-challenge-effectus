import React, { FC, useEffect, useMemo, useState } from "react";
import { SheetContext } from "../context/SheetContext";
import { Row } from "./Row";
import { alphabetArr } from "./utils";

type SheetProps = {
    columns: number;
    rows: number;
};

const Sheet: FC<SheetProps> = ({ columns, rows }) => {
    const matrixCreator = () => {
        return [...Array(rows).keys()].map(() => [
            ...Array(columns).fill("test"),
        ]);
    };

    const alphabet = useMemo(() => alphabetArr(), []);

    useEffect(() => {
        /* const coisto = matrixCreator();
        console.log(coisto); */
    }, []);

    const [sheetMatrix, setSheetMatrix] = useState<string[][]>(() =>
        matrixCreator()
    );

    return (
        <>
            <SheetContext.Provider value={{ sheetMatrix, setSheetMatrix }}>
                {/* Header */}
                <thead>
                    <tr>
                        <th></th>
                        {alphabet.slice(0, columns - 1).map((columnNumber) => (
                            <th key={columnNumber}>{columnNumber}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {[...Array(rows).keys()].map((rowNumber) => {
                        return (
                            <React.Fragment key={rowNumber}>
                                <Row
                                    columns={columns}
                                    rowIdentifier={rowNumber}
                                />
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </SheetContext.Provider>
        </>
    );
};

export default Sheet;
