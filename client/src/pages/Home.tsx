import { useCallback, useEffect, useState } from "react";
import api from "../Axios/Axios";
import { Link } from "react-router-dom";
import { useHttp } from "../hooks/useHttp";
import { MoviesChart } from "../components/MoviesChart";

export const Home = () => {
    const [movies, setMovies] = useState([]);

    const { request } = useHttp();

    const getMovies = useCallback(async () => {
        const response = await request("/api/movies");
        if (response) setMovies(response);
        else setMovies([]);
    }, []);

    useEffect(() => {
        getMovies();
    }, [getMovies]);

    return (
        <div>
            {movies.length > 0 && <MoviesChart movies={movies} />}
            {movies.map((movie: { title: string; movieId: string }) => (
                <Link key={movie.movieId} to={`/movie/${movie.movieId}`}>
                    {movie.title}
                </Link>
            ))}
        </div>
    );
};
