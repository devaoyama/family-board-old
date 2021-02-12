import React, {useEffect, useState} from "react";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { useFamily } from "../data/use-family";
import { useMe } from "../data/use-me";
import { TUser } from "../entities/User";

const Index: React.FC = () => {
    const [users, setUsers] = useState<TUser[]>([]);

    const {family, error} = useFamily();
    const {user} = useMe();

    useEffect(() => {
        if (family && user) {
            const users = family.Users.filter(value => {
                return value.ID != user.ID
            });
            setUsers([...users, user]);
        }
    }, [family, user])

    if (error) return <div>failed to load</div>
    if (!family && !error) return null;

    return (
        <React.Fragment>
            <Container component={"main"} maxWidth={"xs"}>
                <List>
                    {users.map((value, index) => {
                        return (
                            <ListItem key={index} alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="アカウントのアイコン" src={value.PictureUrl}/>
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
