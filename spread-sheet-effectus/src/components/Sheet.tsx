import React, { FC, useEffect, useState } from "react";
import { SheetContext } from "../context/SheetContext";
import { Row } from "./Row";

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
                        {[...Array(columns).keys()].map((columnNumber) => (
                            <th key={columnNumber}>{columnNumber}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {[...Array(rows).keys()].map((rowNumber) => (
                        <React.Fragment key={rowNumber}>
                            <Row columns={columns} rowIdentifier={rowNumber} />
                        </React.Fragment>
                    ))}
                </tbody>
            </SheetContext.Provider>
        </>
    );
};

export default Sheet;
