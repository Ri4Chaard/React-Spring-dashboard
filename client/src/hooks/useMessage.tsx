import { useCallback } from "react";
import toast from "react-hot-toast";

export const useMessage = () => {
    return useCallback((text: string, fn: (text: string) => void) => {
        if (toast && text) {
            toast.success(text);
            fn(text);
        }
    }, []);
};
