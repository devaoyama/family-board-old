import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useFamily } from "../data/use-family";
import { useMe } from "../data/use-me";
import Loading from "./Loading";

const Header = () => {
    const { family, loading } = useFamily();
    const { user } = useMe();

    if (loading) return <Loading />

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    {family?.Name || ''}
                </Typography>
                <Box ml="auto" />
                <IconButton
                    color="inherit"
                >
                    <Avatar alt="アイコン画像" src={user?.PictureUrl} />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
