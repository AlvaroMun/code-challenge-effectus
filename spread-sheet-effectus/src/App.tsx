import "./App.css";
import Sheet from "./components/Sheet";

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
