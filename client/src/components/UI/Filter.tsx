import React, { useEffect, useState } from "react";

interface Movie {
    movieId: string;
    title: string;
    genres: Array<string>;
    visits: Array<Visit>;
}

interface Visit {
    timestamp: number;
    quantity: number;
}

interface FilterProps {
    movies: Array<Movie>;
    setSearchedMovies: (movies: Array<Movie>) => void;
}

export const Filter = ({
    movies,
    setSearchedMovies,
    ...props
}: FilterProps) => {
    const [searchInput, setSearchInput] = useState("");

    const handleFilterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchMovie = e.target.value;
        setSearchInput(searchMovie);
        const filteredMovies = movies.filter((movie) =>
            movie.title.toLowerCase().includes(searchMovie.toLowerCase())
        );
        setSearchedMovies(filteredMovies);
    };

    useEffect(() => {
        setSearchedMovies(movies);
        setSearchInput("");
    }, [movies, setSearchedMovies]);

    return (
        <input
            {...props}
            type="text"
            value={searchInput}
            placeholder="Search..."
            onChange={handleFilterInput}
        />
    );
};
