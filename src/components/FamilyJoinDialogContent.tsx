import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

const FamilyJoinDialogContent = ({ setOpen }) => {
    const [code, setCode] = useState<string>('');

    return (
        <React.Fragment>
            <DialogTitle>ファミリーに参加</DialogTitle>
            <DialogContent>
                <FormControl fullWidth>
                    <TextField
                        label="招待コード"
                        value={code}
                        onChange={event => setCode(event.target.value)}
                    />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)} color="inherit">
                    ファミリーを新しく作成
                </Button>
                <Box mr={"auto"} />
                <Button color="primary">
                    参加する
                </Button>
            </DialogActions>
        </React.Fragment>
    )
}

export default FamilyJoinDialogContent;
