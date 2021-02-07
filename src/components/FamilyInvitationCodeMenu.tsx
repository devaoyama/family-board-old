import React, {useState} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FamilyInvitationCodeDialog from "./FamilyInvitationCodeDialog";

const FamilyInvitationCodeMenu = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = () => {
        setOpen(true);
    };

    return (
        <React.Fragment>
            <MenuItem onClick={handleClick}>招待コードを表示</MenuItem>
            <FamilyInvitationCodeDialog open={open} setOpen={setOpen} />
        </React.Fragment>
    )
}

export default FamilyInvitationCodeMenu;
