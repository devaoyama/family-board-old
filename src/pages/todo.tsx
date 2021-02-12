import React, {useContext} from "react";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import TodoDescriptionIconButton from "../components/TodoDescriptionIconButton";
import TodoCreateFormDialog from "../components/TodoCreateFormDialog";
import {useTodo} from "../data/use-todo";
import Loading from "../components/Loading";
import {mutate} from "swr";
import JWTContext from "../contexts/JWTContext";

const Index: React.FC = () => {
    const {todos, error, loading} = useTodo();

    const jwt = useContext(JWTContext);

    if (error) return <div>failed to load</div>
    if (loading) return <Loading/>

    const handleCheck = async (id: number) => {
        await mutate('/todos', async () => {
            await fetch(process.env.BASE_URL + `/todos/${id}/change_status`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt,
                },
            });

            return;
        });
    };

    return (
        <React.Fragment>
            <Container component={"main"} maxWidth={"xs"}>
                <List>
                    {todos.map((value, index) => {
                        return (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={value.Status}
                                        onChange={() => handleCheck(value.ID)}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary={value.Title}
                                />
                                <ListItemSecondaryAction>
                                    <TodoDescriptionIconButton id={value.ID} description={value.Description}/>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })}
                </List>
            </Container>
            <TodoCreateFormDialog/>
        </React.Fragment>
    )
};

export default Index;
