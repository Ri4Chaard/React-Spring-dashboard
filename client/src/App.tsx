import { Link } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./components/AppRouter";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <div className="container mx-auto">
            <header className="font-bold flex justify-around text-xl mb-3">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
            </header>
            <AppRouter />
            <Toaster />
        </div>
    );
}

export default App;
