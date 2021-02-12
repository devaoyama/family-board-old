import React, {useContext} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import {useFamily} from "../data/use-family";
import {mutate} from "swr";
import JWTContext from "../contexts/JWTContext";

const FamilyLeaveDialog = ({open, setOpen}) => {
    const {family} = useFamily();

    const jwt = useContext(JWTContext);

    const handleClose = () => {
        setOpen(!open);
    };

    const handleLeaveButton = async () => {
        await mutate('/families', async () => {
            await fetch(process.env.BASE_URL + `/families/leave/${family?.ID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt,
                },
            });
            setOpen(false);

            return;
        });
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
        >
            <DialogTitle>警告</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    ファミリーを抜けますか？
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="inherit">
                    キャンセル
                </Button>
                <Button onClick={handleLeaveButton} color="secondary">
                    抜ける
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default FamilyLeaveDialog;
