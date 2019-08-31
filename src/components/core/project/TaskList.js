import React, { useState } from "react";
import Textarea from "react-textarea-autosize";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import checkIcon from "./checkIcon";
import AddIcon from "@material-ui/icons/Add";

import Task from "./Task";

const useStyles = makeStyles({
    addIcon: {
        background: "white",
        borderRadius: "100%",
        cursor: "pointer",
        color: "#00aaff",
        marginTop: "15px",
        boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px",
        "& svg": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    },
    noTask: {
        color: "#8a9499",
        width: "inherit",
        padding: "0 15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40%"
    },
    tick: {
        borderRadius: "50%",
        color: "white",
        height: "24px",
        width: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    check: {
        color: "rgb(138, 148, 153)",
        marginBottom: "40px",
        width: "120px",
        height: "120px"
    },
    input: {
        resize: "none",
        overflowY: "hidden",
        boxSizing: "border-box",
        minWidth: "95%",
        padding: "12px 16px",
        margin: "5px 0",
        display: "inline-block",
        fontWeight: 600,
        color: "#3d474d",
        border: "2px solid #00aaff",
        borderRadius: "9px",
        boxShadow:
            " 0px 0px 0px 1px rgba(0, 0, 0, 0.02),  0px 1px 2px 0px rgba(0, 0, 0, 0.05),  0px 2px 8px 0px rgba(0, 0, 0, 0.05)",
        "&:focus": {
            outline: "none"
        }
    }
});

const TaskList = props => {
    const classes = useStyles();
    const [showTaskInput, setShowTaskInput] = useState(false);
    const [value, setValue] = useState("");

    const renderInput = () => {
        setShowTaskInput(true);
    };
    const handleInput = () => {
        if (value) {
            const newTask = { name: value, section: props.section };
            props.createTask(newTask);
        }
        setValue("");
        setShowTaskInput(false);
    };
    const handleInputChange = e => {
        setValue(e.target.value);
    };
    const renderTaskInput = () => {
        if (!showTaskInput) {
            return "";
        }
        return (
            <Textarea
                onBlur={handleInput}
                autoFocus
                className={classes.input}
                value={value}
                onChange={handleInputChange}
            />
        );
    };
    if (props.tasks) {
        return (
            <>
                {props.tasks.map(task => (
                    <Task key={task._id} task={task.name} id={task._id} />
                ))}
                {renderTaskInput()}

                {showTaskInput ? (
                    ""
                ) : (
                    <div className={classes.addIcon}>
                        <AddIcon onClick={renderInput} />
                    </div>
                )}
                {!showTaskInput && props.tasks.length === 0 ? (
                    <div className={classes.noTask}>
                        <div className={classes.check}>{checkIcon}</div>
                        <div style={{ fontWeight: "bold" }}>No Tasks</div>
                        <Typography variant="body2">
                            click + to add new tasks.
                        </Typography>
                    </div>
                ) : (
                    ""
                )}
            </>
        );
    } else {
        return "";
    }
};

export default TaskList;
