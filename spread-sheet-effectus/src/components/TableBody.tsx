import React, { FC } from "react";
import { Row } from "./Row";

type TableBodyProps = {
    rows: number;
    columns: number;
};

export const TableBody: FC<TableBodyProps> = ({ rows, columns }) => {
    return (
        <tbody>
            {[...Array(rows).keys()].map((rowNumber) => {
                return (
                    <React.Fragment key={rowNumber}>
                        <Row columns={columns} rowIdentifier={rowNumber} />
                    </React.Fragment>
                );
            })}
        </tbody>
    );
};
