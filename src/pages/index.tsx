import React, {useContext} from "react";
import JWTContext from "../contexts/JWTContext";

const Index = () => {
    const jwt = useContext(JWTContext);

    return (
        <div>{jwt}</div>
    )
};

export default Index;
