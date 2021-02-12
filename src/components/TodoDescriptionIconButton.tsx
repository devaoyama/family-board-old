import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import CommentIcon from "@material-ui/icons/Comment";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";

const TodoDescriptionIconButton = ({ description }) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(!open);
    };

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
                    <Button onClick={handleOpen} color="secondary">
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
