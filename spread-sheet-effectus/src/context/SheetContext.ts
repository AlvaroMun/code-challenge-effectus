import { createContext, useContext } from "react";

type SheetContextType={
     sheetMatrix:string[][], setSheetMatrix:Function 
}

export const SheetContext=createContext<SheetContextType>({sheetMatrix:[['']], setSheetMatrix:()=>null});