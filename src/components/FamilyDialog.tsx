import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { useFamily } from "../data/use-family";
import Loading from "./Loading";
import FamilyCreateDialogContent from "./FamilyCreateDialogContent";
import FamilyJoinDialogContent from "./FamilyJoinDialogContent";

const FamilyDialog = () => {
    const [open, setOpen] = useState<boolean>(true);

    const { family, loading } = useFamily();

    if (loading) return <Loading />

    if (family) {
        return null;
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                fullWidth
            >
                <FamilyJoinDialogContent setOpen={setOpen} />
            </Dialog>
            <Dialog
                open={!open}
                fullWidth
            >
                <FamilyCreateDialogContent setOpen={setOpen} />
            </Dialog>
        </React.Fragment>
    )
}

export default FamilyDialog;
