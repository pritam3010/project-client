import React, { useState } from "react";
import Textarea from "react-textarea-autosize";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    nameInput: {
        padding: "5px 10px",
        width: "100%",
        minHeight: "38px",
        fontSize: "22px",
        fontWeight: 500,
        borderWidth: 0,
        outline: "none",
        color: "#3d474d",
        resize: "none",
        "&:hover": {
            backgroundColor: "#f7f9fa",
            borderRadius: "5px"
        },
        "&:focus": {
            outline: "none",
            backgroundColor: "#f7f9fa",
            borderRadius: "5px"
        }
    },
    taskName: {
        padding: "5px 10px",
        minHeight: "38px",
        cursor: "text",
        display: "inline-flex",
        alignItems: "center",
        color: "#3d474d",
        fontSize: "22px",
        fontWeight: 500,
        wordWrap: "break-word",
        wordBreak: "break-word",
        textOverflow: "ellipsis",
        "&:hover": {
            backgroundColor: "#f7f9fa",
            borderRadius: "5px"
        }
    }
});
const TaskName = props => {
    const classes = useStyles();
    const [showInput, setShowInput] = useState(false);
    const [value, setValue] = useState(props.task);

    const handleBlurTextarea = () => {
        setShowInput(false);
        if (value && value !== props.task) {
            props.updateTask({ name: value });
        }
    };
    const handleTextareaChange = event => {
        setValue(event.target.value);
    };
    const editTaskName = () => {
        setValue(props.task);
        setShowInput(true);
    };
    const showCursorAtEnd = e => {
        e.target.value = "";
        e.target.value = props.task;
    };
    return (
        <>
            {showInput ? (
                <Textarea
                    spellCheck={false}
                    autoFocus
                    className={classes.nameInput}
                    onBlur={handleBlurTextarea}
                    value={value}
                    onFocus={showCursorAtEnd}
                    onChange={handleTextareaChange}
                />
            ) : (
                <div className={classes.taskName} onClick={editTaskName}>
                    {props.task}
                </div>
            )}
        </>
    );
};

export default TaskName;
