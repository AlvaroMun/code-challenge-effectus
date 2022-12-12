import React, { FC } from "react";

type TableHeaderProps = {
    headerList: string[] | number[];
};

export const TableHeader: FC<TableHeaderProps> = ({ headerList }) => {
    return (
        <thead>
            <tr>
                <th></th>
                {headerList.map((columnNumber) => (
                    <th key={columnNumber}>{columnNumber}</th>
                ))}
            </tr>
        </thead>
    );
};
