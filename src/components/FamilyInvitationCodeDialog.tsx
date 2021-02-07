import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import { useFamily } from "../data/use-family";

const FamilyInvitationCodeDialog = ({ open, setOpen }) => {
    const { family } = useFamily();

    const handleClose = () => {
        setOpen(!open);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
        >
            <DialogTitle>招待コード</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {family?.InvitationCode}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="inherit">
                    閉じる
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default FamilyInvitationCodeDialog;
