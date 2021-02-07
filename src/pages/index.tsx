import React from "react";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { useFamily } from "../data/use-family";

const Index: React.FC = () => {
    const { family, error } = useFamily();

    if (error) return <div>failed to load</div>
    if (!family && !error) return <div>ファミリーがいません‥.</div>

    return (
        <React.Fragment>
            <Container component={"main"} maxWidth={"xs"}>
                <List>
                    {family.Users.map((value, index) => {
                        return (
                            <ListItem key={index} alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="アカウントのアイコン" src={value.PictureUrl} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={value.Name}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary"
                                            >
                                                {value.Status}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        )
                    })}
                </List>
            </Container>
        </React.Fragment>
    )
};

export default Index;
