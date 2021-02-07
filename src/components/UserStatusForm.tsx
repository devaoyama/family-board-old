import React, {useContext, useEffect, useState} from "react";
import { mutate } from "swr";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { useMe } from "../data/use-me";
import JWTContext from "../contexts/JWTContext";

const UserStatusForm = ({ open, setOpen }) => {
    const jwt = useContext(JWTContext)
    const [status, setStatus] = useState<string>("暇");
    const [optionStatus, setOptionStatus] = useState<string>(null)
    const { user } = useMe();

    useEffect(() => {
        if (user) {
            const status = user.Status;
            if (
                status !== '暇' &&
                status !== '仕事' &&
                status !== '仕事（リモート）' &&
                status !== '用事' &&
                status !== '遊び'
            ) {
                setStatus("その他");
                setOptionStatus(status);
            } else {
                setStatus(status);
            }
        }
    }, [user])

    const handleClick = async () => {
        await mutate('/users/me', async user => {
            const response = await fetch(process.env.BASE_URL + '/users/change_status', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt,
                },
                body: JSON.stringify({
                    status: status === "その他" ? optionStatus : status,
                }),
            });

            return await response.json()
        });
        setOpen(false);
    }
    const handleClose = () => {
        setOpen(!open);
    }

    const handleChange = (event) => {
        setStatus(event.target.value);
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
        >
            <DialogTitle>ステータス変更</DialogTitle>
            <DialogContent>
                <FormControl fullWidth>
                    <InputLabel id="user-status">ステータス</InputLabel>
                    <Select
                        labelId="user-status"
                        value={status}
                        onChange={handleChange}
                    >
                        <MenuItem value={"暇"}>暇</MenuItem>
                        <MenuItem value={"仕事"}>仕事</MenuItem>
                        <MenuItem value={"仕事（リモート）"}>仕事（リモート）</MenuItem>
                        <MenuItem value={"用事"}>用事</MenuItem>
                        <MenuItem value={"遊び"}>遊び</MenuItem>
                        <MenuItem value={"その他"}>その他</MenuItem>
                    </Select>
                    {status === "その他" && (
                        <React.Fragment>
                            <Box mt={3} />
                            <TextField
                                label="オプションステータス"
                                value={optionStatus}
                                onChange={event => setOptionStatus(event.target.value)}
                            />
                        </React.Fragment>
                    )}
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="inherit">
                    閉じる
                </Button>
                <Button onClick={handleClick} color="primary">
                    変更
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default UserStatusForm;
