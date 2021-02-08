import React, {useState} from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";

const FamilyCreateDialogContent = ({ setOpen }) => {
    const [name, setName] = useState<string>('');

    return (
        <React.Fragment>
            <DialogTitle>ファミリーを作成</DialogTitle>
            <DialogContent>
                <FormControl fullWidth>
                    <TextField
                        label="ファミリーの名前"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(true)} color="inherit">
                    招待コードを入力する
                </Button>
                <Box mr={"auto"} />
                <Button color="primary">
                    作成する
                </Button>
            </DialogActions>
        </React.Fragment>
    )
}

export default FamilyCreateDialogContent;
