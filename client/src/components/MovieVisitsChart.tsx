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
interface MovieProps {
    movie: Movie;
}

export const MovieVisitsChart = ({ movie }: MovieProps) => {
    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: false,
                text: movie.title,
            },
        },
    };

    const data = {
        labels: movie.visits.map((visit: Visit) =>
            new Date(visit.timestamp * 1000).toDateString()
        ),
        datasets: [
            {
                label: "Visitors",
                data: movie.visits.map((visit: Visit) => visit.quantity),
                backgroundColor: "rgba(55, 84, 214, 0.5)",
            },
        ],
    };
    return <Bar options={options} data={data} />;
};
