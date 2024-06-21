import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
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
}

export const MoviesChart = ({ movies }: MoviesProps) => {
    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "Chart.js Bar Chart",
            },
        },
    };

    const data = {
        labels: movies.map((movie) => movie.title),
        datasets: [
            {
                data: movies.map((movie) =>
                    movie.visits.reduce((sum, visit) => sum + visit.quantity, 0)
                ),

                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };
    return <Bar options={options} data={data} />;
};
