import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Sheet from "./components/Sheet";
import { SheetContext } from "./context/SheetContext";

function App() {
    return (
        <div>
            <table>
                <Sheet columns={6} rows={6} />
            </table>
        </div>
    );
}

export default App;
