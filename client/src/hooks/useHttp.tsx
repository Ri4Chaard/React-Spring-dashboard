import { useState, useCallback } from "react";
import api from "../Axios/Axios";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(
        async (
            url: string,
            method = "GET",
            body: any = null,
            headers: any = {}
        ) => {
            setLoading(true);
            setError(null);

            try {
                if (body) {
                    headers["Content-Type"] = "application/json";
                }

                const response = await api({
                    method,
                    url,
                    data: body,
                    headers,
                });

                const data = response.data;

                setLoading(false);
                return data;
            } catch (e: any) {
                setLoading(false);
                const errorMessage = e.response?.data || "Something went wrong";
                setError(errorMessage);
                throw e;
            }
        },
        []
    );

    const clearError = useCallback(() => setError(null), []);

    return { loading, request, error, clearError };
};
