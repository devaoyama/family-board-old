import React from "react";
import Liff from "../components/Liff";
import Auth from "../components/Auth";

const App = ({ Component, pageProps }) => {
    return (
        <React.Fragment>
            <Liff>
                <Auth>
                    <Component {...pageProps} />
                </Auth>
            </Liff>
        </React.Fragment>
    );
};

export default App;
