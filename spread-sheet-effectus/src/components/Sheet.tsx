import React, { FC } from "react";
import { Row } from "./Row";

type SheetProps = {
    columns: number;
    rows: number;
};

const Sheet: FC<SheetProps> = ({ columns, rows }) => {
    return (
        <>
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
        </>
    );
};

export default Sheet;
