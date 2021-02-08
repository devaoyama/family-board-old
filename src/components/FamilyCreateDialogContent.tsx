import React, {useContext, useState} from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { mutate } from "swr";
import JWTContext from "../contexts/JWTContext";

const FamilyCreateDialogContent = ({ setOpen }) => {
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const jwt = useContext(JWTContext);

    const handleClick = async () => {
        await mutate('/families', async user => {
            const response = await fetch(process.env.BASE_URL + '/families', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt,
                },
                body: JSON.stringify({
                    name: name,
                }),
            });
            if (response.status !== 200) {
                setError('招待コードが間違っています');
                return;
            }

            return await response.json()
        });
    }

    return (
        <React.Fragment>
            <DialogTitle>ファミリーを作成</DialogTitle>
            <DialogContent>
                <FormControl fullWidth>
                    <TextField
                        label="ファミリーの名前"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        error={!!error}
                        helperText={error}
                    />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(true)} color="inherit">
                    招待コードを入力する
                </Button>
                <Box mr={"auto"} />
                <Button onClick={handleClick} color="primary">
                    作成する
                </Button>
            </DialogActions>
        </React.Fragment>
    )
}

export default FamilyCreateDialogContent;
