import React, { FC } from "react";
import { Cell } from "./Cell";

type RowProps = {
    columns: number;
    rowIdentifier: number;
};

export const Row: FC<RowProps> = ({ columns, rowIdentifier }) => {
    return (
        <tr>
            <td>{rowIdentifier}</td>
            {[...Array(columns - 1).keys()].map((columnNumber) => (
                <React.Fragment key={columnNumber}>
                    <Cell
                        columnIdentifier={columnNumber + 1}
                        rowIdentifier={rowIdentifier}
                    />
                </React.Fragment>
            ))}
        </tr>
    );
};
