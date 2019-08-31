import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import TimeAgo from "timeago-react";

import { AddChecklistIcon } from "./ts";

const useStyles = makeStyles(theme => ({
    avatar: {
        width: "32px",
        height: "32px",
        backgroundColor: "#007bff"
    }
}));

const Comment = props => {
    const classes = useStyles();
    // const { text } = props;
    console.log(props);
    return (
        <>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                        {/* <AddIcon /> */}
                        <div
                            style={{
                                width: "32px",
                                height: "32px"
                            }}
                        >
                            <AddChecklistIcon color="#007bff" />
                        </div>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography
                            style={{
                                fontSize: "11px"
                            }}
                            color="textSecondary"
                        >
                            <TimeAgo datetime={props.createdAt} />
                        </Typography>
                    }
                    secondary={
                        <Typography
                            variant="body2"
                            style={{ color: "#3d474d" }}
                        >
                            {props.text}
                        </Typography>
                    }
                />
            </ListItem>
        </>
    );
};

export default Comment;
