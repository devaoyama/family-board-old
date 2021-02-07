import React from "react";
import Liff from "../components/Liff";

const App = ({ Component, pageProps }) => {
    return (
        <React.Fragment>
            <Liff>
                <Component {...pageProps} />
            </Liff>
        </React.Fragment>
    );
};

export default App;
