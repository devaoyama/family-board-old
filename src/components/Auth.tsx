import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import JWTContext from "../contexts/JWTContext";

const Auth = ({ children }) => {
    const [isLogin, setLogin] = useState<boolean | undefined>(undefined);
    const [jwt, setJwt] = useState<string | null>(null);

    useEffect(() => {
        if (liff.isLoggedIn()) {
            setLogin(undefined)
            fetch(process.env.BASE_URL + '/login', {
                mode: "cors",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_token: liff.getIDToken(),
                }),
            }).then(async response => {
                if (response.status !== 200) {
                    const error = await response.json();
                    console.log(error);
                    if (error.error_description?.error_description === 'IdToken expired.') {
                        liff.logout();
                    }
                    setLogin(undefined);
                } else {
                    setJwt(await response.text());
                    setLogin(true);
                }
            });
        } else {
            setLogin(false);
        }
    }, []);

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
