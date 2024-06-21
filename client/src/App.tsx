import { Link } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./components/AppRouter";

function App() {
    return (
        <div className="App">
            <header>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
            </header>
            <AppRouter />
        </div>
    );
}

export default App;
