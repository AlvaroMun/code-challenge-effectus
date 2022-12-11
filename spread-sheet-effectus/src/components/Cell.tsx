import React, { FC, SyntheticEvent, useContext } from "react";
import { SheetContext } from "../context/SheetContext";

type CellProps = {
    columnIdentifier: number;
    rowIdentifier: number;
};

export const Cell: FC<CellProps> = ({ rowIdentifier, columnIdentifier }) => {
    const { sheetMatrix, setSheetMatrix } = useContext(SheetContext);
    console.log(sheetMatrix[rowIdentifier][columnIdentifier]);

    return (
        <td>
            <input
                type={"text"}
                value={sheetMatrix[rowIdentifier][columnIdentifier]}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setSheetMatrix((prevState: string[][]) => {
                        const newState = [...prevState];
                        newState[rowIdentifier][columnIdentifier] =
                            event.target.value;
                        return newState;
                    });
                }}
                onSelect={() =>
                    console.log({ rowIdentifier, columnIdentifier })
                }
            ></input>
        </td>
    );
};
