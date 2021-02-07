import { useContext } from "react";
import useSWR from "swr";
import { TFamily } from "../entities/Family";
import JWTContext from "../contexts/JWTContext";
import { fetchWithToken } from "../utils/api-with-jwt";

export const useFamily = () => {
    const jwt = useContext(JWTContext);
    const { data, error } = useSWR<{Family: TFamily} | null>('/families', (url) => fetchWithToken(url, jwt));

    const loading = !data && !error;

    return {
        loading,
        error,
        family: data?.Family
    }
}
