import React from "react";
import Liff from "../components/Liff";
import Auth from "../components/Auth";
import Header from "../components/Header";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = ({ Component, pageProps }) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Liff>
                <Auth>
                    <Header />
                    <Component {...pageProps} />
                </Auth>
            </Liff>
        </React.Fragment>
    );
};

export default App;
