import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const Auth = ({ children }) => {
    const [isLogin, setLogin] = useState<boolean | undefined>(undefined);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (liff.isLoggedIn()) {
            setLogin(undefined)
            fetch(process.env.API_ENDPOINT + '/login', {
                method: "POST",
                body: JSON.stringify({
                    id_token: liff.getIDToken(),
                }),
            }).then(() => {
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

    if (isLogin) {
        return children;
    }

    if (isLogin === false) {
        liff.login();
    }

    return <Loading />
}

export default Auth;
