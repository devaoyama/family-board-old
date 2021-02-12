import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import makeStyles from "@material-ui/core/styles/makeStyles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ListIcon from '@material-ui/icons/List';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

const useStyle = makeStyles({
    root: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: '100%',
    }
});

const FooterMenu = () => {
    const [value, setValue] = useState('/');

    const router = useRouter();

    const classes = useStyle();

    useEffect(() => {
        setValue(router.pathname);
    }, [router.pathname]);

    const handleChange = async (event, newValue) => {
        await router.push(newValue);
    };

    return (
        <BottomNavigation
            className={classes.root}
            value={value}
            onChange={handleChange}
            showLabels
        >
            <BottomNavigationAction label="ステータス" value="/" icon={<PermContactCalendarIcon />} />
            <BottomNavigationAction label="Todo" value="/todo" icon={<ListIcon />} />
        </BottomNavigation>
    );
}

export default FooterMenu;
