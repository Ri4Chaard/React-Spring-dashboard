import React, { useCallback, useEffect, useState } from "react";
import { MovieVisitsChart } from "../components/MovieVisitsChart";
import { useParams } from "react-router";
import { useHttp } from "../hooks/useHttp";

interface Movie {
    movieId: string;
    title: string;
    genres: Array<String>;
    visits: Array<Visit>;
}
interface Visit {
    timestamp: number;
    quantity: number;
}

export const MovieInfo = () => {
    const { id } = useParams();
    const { loading, request, error, clearError } = useHttp();

    const [movie, setMovie] = useState<Movie>();

    const getMovie = useCallback(async () => {
        try {
            const response = await request(`/api/movies/${id}`);
            setMovie(response);
        } catch (e) {}
    }, []);

    useEffect(() => {
        getMovie();
    }, [getMovie]);

    useEffect(() => {
        console.log(error);
        clearError();
    }, [error, clearError]);

    if (loading) return <h1 className="text-3xl text-center">Loading...</h1>;

    return (
        movie && (
            <div className="flex flex-col items-center">
                <h1 className="text-3xl text-center">{movie.title}</h1>
                <div className="flex">
                    {movie.genres.map((genre) => (
                        <p className="text-xl font-bold m-3">{genre}</p>
                    ))}
                </div>
                <div className="flex w-full h-[500px] mb-3 justify-center">
                    <MovieVisitsChart movie={movie} />
                </div>
            </div>
        )
    );
};
