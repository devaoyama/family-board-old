import { useContext } from "react";
import useSWR from "swr";
import JWTContext from "../contexts/JWTContext";
import { fetchWithToken } from "../utils/api-with-jwt";
import { TUser } from "../entities/User";

export const useMe = () => {
    const jwt = useContext(JWTContext);
    const { data, error } = useSWR<{User: TUser} | null>('/users/me', (url) => fetchWithToken(url, jwt));

    const loading = !data && !error;

    return {
        loading,
        error,
        user: data?.User
    }
}
