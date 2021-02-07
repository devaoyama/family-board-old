import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import JWTContext from "../contexts/JWTContext";

const Auth = ({ children }) => {
    const [isLogin, setLogin] = useState<boolean | undefined>(undefined);
    const [jwt, setJwt] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (liff.isLoggedIn()) {
            setLogin(undefined)
            fetch(process.env.API_ENDPOINT + '/login', {
                method: "POST",
                body: JSON.stringify({
                    id_token: liff.getIDToken(),
                }),
            }).then(response => {
                response.text().then(value => setJwt(value));
                setLogin(true);
            }).catch(() => {
                setLogin(false);
                setError('ログインエラー');
            });
        } else {
            setLogin(false);
        }
    }, []);

    if (error) {
        return (
            <div>{error}</div>
        );
    }

    if (isLogin && jwt) {
        return (
            <JWTContext.Provider value={jwt}>
                {children}
            </JWTContext.Provider>
        );
    }

    if (isLogin === false) {
        liff.login();
    }

    return <Loading />
}

export default Auth;
