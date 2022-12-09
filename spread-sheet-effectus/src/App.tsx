import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Sheet from "./components/Sheet";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <table>
                <Sheet columns={6} rows={6} />
            </table>
        </div>
    );
}

export default App;
