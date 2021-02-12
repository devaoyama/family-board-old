import React from "react";
import Liff from "../components/Liff";
import Auth from "../components/Auth";
import Header from "../components/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import FamilyDialog from "../components/FamilyDialog";
import FooterMenu from "../components/FooterMenu";

const App = ({ Component, pageProps }) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Liff>
                <Auth>
                    <FamilyDialog />
                    <Header />
                    <Component {...pageProps} />
                    <FooterMenu />
                </Auth>
            </Liff>
        </React.Fragment>
    );
};

export default App;
