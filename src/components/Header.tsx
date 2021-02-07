import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useFamily } from "../data/use-family";
import { useMe } from "../data/use-me";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import UserStatusFormMenu from "./UserStatusFormMenu";

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const { family } = useFamily();
    const { user } = useMe();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>招待コードを表示</MenuItem>
                    <UserStatusFormMenu />
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
