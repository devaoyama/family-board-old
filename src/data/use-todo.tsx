import {useContext} from "react";
import useSWR from "swr";
import JWTContext from "../contexts/JWTContext";
import {fetchWithToken} from "../utils/api-with-jwt";
import {TTodo} from "../entities/Todo";

export const useTodo = () => {
    const jwt = useContext(JWTContext);
    const {data, error} = useSWR<{ Todos: TTodo[] } | null>('/todos', (url) => fetchWithToken(url, jwt));

    const loading = !data && !error;

    return {
        loading,
        error,
        todos: data?.Todos
    }
}
