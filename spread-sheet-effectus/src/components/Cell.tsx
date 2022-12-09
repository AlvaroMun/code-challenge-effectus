import React, { FC } from "react";

type CellProps = {
    columnIdentifier: number;
    rowIdentifier: number;
};

export const Cell: FC<CellProps> = ({ rowIdentifier, columnIdentifier }) => {
    return (
        <td>
            <input
                type={"text"}
                onSelect={() =>
                    console.log({ rowIdentifier, columnIdentifier })
                }
            ></input>
        </td>
    );
};
