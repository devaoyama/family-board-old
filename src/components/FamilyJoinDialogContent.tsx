import React, { useContext, useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { mutate } from "swr";
import JWTContext from "../contexts/JWTContext";

const FamilyJoinDialogContent = ({ setOpen }) => {
    const [code, setCode] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const jwt = useContext(JWTContext);

    const handleClick = async () => {
        await mutate('/families', async user => {
            const response = await fetch(process.env.BASE_URL + '/families/join', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt,
                },
                body: JSON.stringify({
                    invitation_code: code,
                }),
            });
            if (response.status !== 200) {
                setError('招待コードが間違っています');
                return;
            }
            setOpen('');

            return await response.json()
        });
    }

    return (
        <React.Fragment>
            <DialogTitle>ファミリーに参加</DialogTitle>
            <DialogContent>
                <FormControl fullWidth>
                    <TextField
                        label="招待コード"
                        value={code}
                        onChange={event => setCode(event.target.value)}
                        error={!!error}
                        helperText={error}
                    />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen('create')} color="inherit">
                    ファミリーを新しく作成
                </Button>
                <Box mr={"auto"} />
                <Button onClick={handleClick} color="primary">
                    参加する
                </Button>
            </DialogActions>
        </React.Fragment>
    )
}

export default FamilyJoinDialogContent;
