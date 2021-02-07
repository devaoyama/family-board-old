import React, { useEffect, useState } from "react";
import Head from "next/head";
import Loading from "./Loading";

const Liff = ({ children }) => {
    const [isInit, setInit] = useState<boolean>(false);

    useEffect(() => {
        liff.init({ liffId: process.env.LIFF_ID })
            .then(() => {
                setInit(true);
            })
        ;
    }, []);

    return (
        <React.Fragment>
            <Head>
                <script charSet="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
            </Head>
            {isInit ? (
                children
            ) : (
                <Loading />
            )}
        </React.Fragment>
    )
};

export default Liff;
