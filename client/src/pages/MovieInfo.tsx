import React, { useCallback, useEffect, useState } from "react";
import { MovieVisitsChart } from "../components/MovieVisitsChart";
import { useParams } from "react-router";
import { useHttp } from "../hooks/useHttp";

export const MovieInfo = () => {
    const { id } = useParams();
    const { request } = useHttp();

    const [movie, setMovie] = useState();

    const getMovie = useCallback(async () => {
        const response = await request(`/api/movies/${id}`);
        setMovie(response);
    }, []);

    useEffect(() => {
        getMovie();
    }, [getMovie]);

    return <div>{movie && <MovieVisitsChart movie={movie} />}</div>;
};
