import "./App.css";
import api from "./Axios.js";
import { useEffect } from "react";

function App() {
    const getMovies = async () => {
        try {
            const response = await api.get("/api/movies");
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getMovies();
    });

    return <div className="App"></div>;
}

export default App;
