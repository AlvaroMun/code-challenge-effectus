import { createContext, useContext } from "react";

type SheetContextType = {
    sheetMatriz: string[][];
    setSheetMatriz: Function;
};

export const SheetContext = createContext<SheetContextType>({
    sheetMatriz: [[""]],
    setSheetMatriz: () => null,
});
