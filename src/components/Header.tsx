import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useFamily } from "../data/use-family";
import { useMe } from "../data/use-me";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const { family } = useFamily();
    const { user } = useMe();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    {family?.Name + '家' || ''}
                </Typography>
                <Box ml="auto" />
                <IconButton
                    color="inherit"
                    onClick={handleMenu}
                >
                    <Avatar alt="アイコン画像" src={user?.PictureUrl} />
                </IconButton>
                <HeaderMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;
