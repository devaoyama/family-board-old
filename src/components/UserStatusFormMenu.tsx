import React, {useState} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import UserStatusForm from "./UserStatusForm";

const UserStatusFormMenu = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = () => {
        setOpen(true);
    }

    return (
        <React.Fragment>
            <MenuItem onClick={handleClick}>ステータス変更</MenuItem>
            <UserStatusForm open={open} setOpen={setOpen} />
        </React.Fragment>
    )
}

export default UserStatusFormMenu;
