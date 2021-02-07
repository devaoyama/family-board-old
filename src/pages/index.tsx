import React, { useContext, useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import JWTContext from "../contexts/JWTContext";
import { get } from "../utils/api";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const Index: React.FC = () => {
    const [family, setFamily] = useState<object | null>(null)
    const [users, setUsers] = useState<object[] | null>(null)

    const jwt = useContext(JWTContext);

    useEffect(() => {
        get('/families', jwt).then(res => {
            console.log(res)
            setFamily(res.Family)
            setUsers(res.Family.Users)
        })
    }, []);

    return (
        <React.Fragment>
            <Container component={"main"} maxWidth={"xs"}>
                <List>
                    {users ? (
                        users.map((value: any, index) => {
                            return (
                                <ListItem key={index} alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={value.PictureUrl} />
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
                        })
                    ) : (
                        <div>Loading</div>
                    )}
                </List>
            </Container>
        </React.Fragment>
    )
};

export default Index;
