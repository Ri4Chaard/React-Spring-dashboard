import { Link } from "react-router-dom";

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
interface MoviesProps {
    movies: Array<Movie>;
    deleteMovie: (movieId: string) => void;
}

export const MovieList = ({ movies, deleteMovie }: MoviesProps) => {
    return (
        <>
            {movies.map((movie: { title: string; movieId: string }) => (
                <div
                    key={movie.movieId}
                    className="flex justify-between items-center mb-3"
                >
                    <Link
                        className="w-full p-4 border border-solid border-slate-700 mr-3"
                        to={`/movie/${movie.movieId}`}
                    >
                        {movie.title}
                    </Link>
                    <button
                        className="w-8 h-8 flex justify-center items-center border border-solid rounded-full border-slate-700"
                        onClick={() => deleteMovie(movie.movieId)}
                    >
                        -
                    </button>
                </div>
            ))}
        </>
    );
};
