import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { useMe } from "../data/use-me";
import Loading from "./Loading";
import FamilyCreateDialogContent from "./FamilyCreateDialogContent";
import FamilyJoinDialogContent from "./FamilyJoinDialogContent";

const FamilyDialog = () => {
    const [open, setOpen] = useState<boolean | undefined>(true);

    const { user, loading } = useMe();

    if (!user && loading) return <Loading />

    if (user.FamilyId) {
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
