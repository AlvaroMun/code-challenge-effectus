import React, { FC } from "react";

/**
 * TableHeaderProps is an object with a property called headerList that is an array of strings or
 * numbers.
 * @property {string[] | number[]} headerList - This is the list of headers that will be displayed in
 * the table.
 */
type TableHeaderProps = {
    headerList: string[] | number[];
};

/**
 * It takes in a list of column numbers and returns a table header
 * @param  {string[] | number[]} headerList - This is the list of headers that will be displayed in
 * the table.
 * @returns A table header with a list of column text.
 */
export const TableHeader: FC<TableHeaderProps> = ({ headerList }) => {
    return (
        <thead>
            <tr>
                <th></th>
                {headerList.map((columnText) => (
                    <th key={columnText}>{columnText}</th>
                ))}
            </tr>
        </thead>
    );
};
