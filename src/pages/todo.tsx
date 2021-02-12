import React, {useEffect, useState} from "react";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {TTodo} from "../entities/Todo";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from '@material-ui/icons/Comment';

const Index: React.FC = () => {
    const [todos, setTodos] = useState<TTodo[]>([]);

    useEffect(() => {
        const todo: TTodo[] = [
            {
                Title: "犬の散歩",
                Description: "犬の散歩に行く",
                Status: true,
            },
            {
                Title: "犬のご飯",
                Description: "犬にご飯を上げる",
                Status: false,
            },
        ];
        setTodos(todo);
    }, [])

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
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary={value.Title}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="comments">
                                        <CommentIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })}
                </List>
            </Container>
        </React.Fragment>
    )
};

export default Index;
