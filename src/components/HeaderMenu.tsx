import React, {useState} from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import FamilyInvitationCodeDialog from "./FamilyInvitationCodeDialog";
import UserStatusForm from "./UserStatusForm";
import FamilyLeaveDialog from "./FamilyLeaveDialog";

const HeaderMenu = ({ anchorEl, setAnchorEl }) => {
    const open = Boolean(anchorEl);

    const [firstMenu, setFirstMenu] = useState<boolean>(false);
    const [secondMenu, setSecondMenu] = useState<boolean>(false);
    const [thirdMenu, setThirdMenu] = useState<boolean>(false);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuClick = (menu: string) => {
        setAnchorEl(null);
        switch (menu) {
            case 'first':
                setFirstMenu(true);
                break;
            case 'second':
                setSecondMenu(true);
                break;
            case 'third':
                setThirdMenu(true);
                break
        }
    }

    return (
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
            <MenuItem onClick={() => handleMenuClick('first')}>招待コードを表示</MenuItem>
            <MenuItem onClick={() => handleMenuClick('second')}>ステータス変更</MenuItem>
            <MenuItem onClick={() => handleMenuClick('third')}>ファミリーを抜ける</MenuItem>
            <FamilyInvitationCodeDialog open={firstMenu} setOpen={setFirstMenu} />
            <UserStatusForm open={secondMenu} setOpen={setSecondMenu} />
            <FamilyLeaveDialog open={thirdMenu} setOpen={setThirdMenu} />
        </Menu>
    )
}

export default HeaderMenu;
