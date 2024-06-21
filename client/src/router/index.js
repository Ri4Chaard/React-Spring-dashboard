import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { MovieInfo } from "../pages/MovieInfo";

export const routes = [
    { path: "/home", element: <Home /> },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/movie/:id",
        element: <MovieInfo />,
    },
];
