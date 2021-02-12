import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AddIcon from '@material-ui/icons/Add';
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(10),
        right: theme.spacing(2),
    },
}));

const TodoCreateFormDialog = () => {
    const [open, setOpen] = useState<boolean>(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleOpen}
                fullWidth
            >
                <DialogTitle>追加</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="タイトル"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="詳細"
                        type="text"
                        fullWidth
                        rows={4}
                        multiline
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOpen} color="default">
                        キャンセル
                    </Button>
                    <Button onClick={handleOpen} color="primary">
                        追加
                    </Button>
                </DialogActions>
            </Dialog>
            <Fab color="primary" className={classes.fab} onClick={() => setOpen(true)}>
                <AddIcon />
            </Fab>
        </React.Fragment>
    )
}

export default TodoCreateFormDialog;
