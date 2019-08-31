import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    task: {
        width: "100%",
        flexShrink: 1,
        flexGrow: 1,
        padding: "12px 16px",
        margin: "5px 0",
        display: "inline-block",
        fontWeight: 600,
        background: "#fff",
        color: "#3d474d",
        wordWrap: "break-word",
        wordBreak: "break-word",
        textOverflow: "ellipsis",
        border: "2px solid transparent",
        borderRadius: "9px",
        boxShadow:
            " 0px 0px 0px 1px rgba(0, 0, 0, 0.02),  0px 1px 2px 0px rgba(0, 0, 0, 0.05),  0px 2px 8px 0px rgba(0, 0, 0, 0.05)",
        textOverflow: "ellipsis"
    }
});

const Task = props => {
    const classes = useStyles();

    return (
        <Link
            to={{
                pathname: `/app/task/${props.id}`,
                state: { modal: true }
            }}
            style={{
                display: "flex",
                flexWrap: "wrap",
                width: "95%",
                flexShrink: 1,
                flexGrow: 1,
                cursor: "pointer",
                textDecoration: "none"
            }}
        >
            <div className={classes.task}>{props.task}</div>
        </Link>
    );
};

export default Task;
