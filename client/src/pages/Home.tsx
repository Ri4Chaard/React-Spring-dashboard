import { useCallback, useEffect, useState } from "react";
import { useHttp } from "../hooks/useHttp";
import { MoviesChart } from "../components/MoviesChart";
import { MovieList } from "../components/MovieList";
import { Modal } from "../components/UI/Modal";
import { AddMovie } from "../components/AddMovie";
import { useMessage } from "../hooks/useMessage";
import toast, { Toaster } from "react-hot-toast";
import { Filter } from "../components/UI/Filter";

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

export const Home = () => {
    const [movies, setMovies] = useState<Array<Movie>>([]);
    const [searchedMovies, setSearchedMovies] = useState<Array<Movie>>(movies);

    const [visible, setVisible] = useState<boolean>(false);

    const { loading, request, error, clearError } = useHttp();

    const getMovies = useCallback(async () => {
        try {
            const response = await request("/api/movies");
            if (response) setMovies(response);
            else setMovies([]);
        } catch (e) {}
    }, []);
    const addMovie = async (form: Object) => {
        try {
            const response = await request("/api/movies", "POST", { ...form });
            getMovies();
            toast.success("Added successfully");
        } catch (e) {}
    };
    const deleteMovie = async (movieId: string) => {
        try {
            const response = await request(`/api/movies/${movieId}`, "DELETE", {
                movieId,
            });
            getMovies();
            toast.success("Deleted successfully");
        } catch (e) {}
    };

    useEffect(() => {
        getMovies();
    }, [getMovies]);

    useEffect(() => {
        if (error) toast.error("Fill in all fields ");
        console.log(error);

        clearError();
    }, [error, clearError]);

    if (loading) return <h1 className="text-3xl text-center">Loading...</h1>;

    return (
        <div className="flex flex-col items-center">
            <div className="flex w-full h-[500px] mb-3 justify-center">
                {movies.length > 0 && <MoviesChart movies={movies} />}
            </div>
            <div className="w-[300px]">
                <button
                    className="w-5 h-5 flex justify-center items-center mb-3 border border-solid border-slate-700"
                    onClick={() => setVisible(true)}
                >
                    +
                </button>
                <Filter movies={movies} setSearchedMovies={setSearchedMovies} />
                <MovieList movies={searchedMovies} deleteMovie={deleteMovie} />
            </div>
            <Modal visible={visible} setVisible={setVisible}>
                <AddMovie addMovie={addMovie} />
            </Modal>
        </div>
    );
};
