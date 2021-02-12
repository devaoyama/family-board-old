import React, {useContext, useState} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AddIcon from '@material-ui/icons/Add';
import TextField from "@material-ui/core/TextField";
import {mutate} from "swr";
import JWTContext from "../contexts/JWTContext";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(10),
        right: theme.spacing(2),
    },
}));

const TodoCreateFormDialog = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const jwt = useContext(JWTContext);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleCreateButton = async () => {
        await mutate('/todos', async () => {
            await fetch(process.env.BASE_URL + '/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt,
                },
                body: JSON.stringify({
                    title,
                    description,
                }),
            });
            setOpen(false);
            setTitle('');
            setDescription('');

            return;
        });
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
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="詳細"
                        type="text"
                        fullWidth
                        rows={4}
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                        multiline
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOpen} color="default">
                        キャンセル
                    </Button>
                    <Button onClick={handleCreateButton} color="primary">
                        追加
                    </Button>
                </DialogActions>
            </Dialog>
            <Fab color="primary" className={classes.fab} onClick={() => setOpen(true)}>
                <AddIcon/>
            </Fab>
        </React.Fragment>
    )
}

export default TodoCreateFormDialog;
