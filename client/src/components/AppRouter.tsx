import { Navigate, Route, Routes } from "react-router";
import { routes } from "../router";

export const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
            <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
    );
};
