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
                display: true,
                text: "Chart.js Bar Chart",
            },
        },
    };

    const data = {
        labels: movie.visits.map((visit: Visit) =>
            new Date(visit.timestamp * 1000).toDateString()
        ),
        datasets: [
            {
                data: movie.visits.map((visit: Visit) => visit.quantity),

                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };
    return <Bar options={options} data={data} />;
};
