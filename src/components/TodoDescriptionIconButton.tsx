import React, {useContext, useState} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import CommentIcon from "@material-ui/icons/Comment";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import {mutate} from "swr";
import JWTContext from "../contexts/JWTContext";

const TodoDescriptionIconButton = ({ id, description }) => {
    const [open, setOpen] = useState<boolean>(false);

    const jwt = useContext(JWTContext);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleDeleteButton = async () => {
        if (window.confirm('削除しますか？')) {
            await mutate('/todos', async () => {
                await fetch(process.env.BASE_URL + `/todos/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + jwt,
                    },
                });
                setOpen(false);

                return;
            });
        }
    }

    return (
        <React.Fragment>
            <IconButton onClick={handleOpen} edge="end" aria-label="comments">
                <CommentIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleOpen}
                fullWidth
            >
                <DialogTitle>詳細</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteButton} color="secondary">
                        削除
                    </Button>
                    <Box mx="auto" />
                    <Button onClick={handleOpen} color="inherit">
                        閉じる
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default TodoDescriptionIconButton;
