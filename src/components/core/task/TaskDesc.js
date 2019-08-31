import React, { useState } from "react";
import Textarea from "react-textarea-autosize";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    nameInput: {
        margin: "5px 0",
        padding: "5px 10px",
        color: "#8a9499",
        width: "100%",
        fontSize: "14px",
        lineHeight: "22px",
        borderWidth: 0,
        outline: "none",
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
    taskDesc: {
        margin: "5px 0",
        padding: "5px 10px",
        cursor: "text",
        color: "#8a9499",
        display: "inline-flex",
        alignItems: "center",
        fontSize: "14px",
        lineHeight: "22px",
        wordWrap: "break-word",
        wordBreak: "break-word",
        textOverflow: "ellipsis",
        "&:hover": {
            backgroundColor: "#f7f9fa",
            borderRadius: "5px"
        }
    }
});
const TaskDesc = props => {
    const classes = useStyles();
    const [showInput, setShowInput] = useState(false);
    const [value, setValue] = useState(props.taskDesc);

    const handleBlurTextarea = () => {
        setShowInput(false);
        if (value && value !== props.taskDesc) {
            props.updateTask({ desc: value });
        }
    };
    const handleTextareaChange = event => {
        setValue(event.target.value);
    };
    const editTaskDesc = () => {
        setValue(props.taskDesc);
        setShowInput(true);
    };
    const showCursorAtEnd = e => {
        e.target.value = "";
        e.target.value = props.taskDesc;
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
                    onChange={handleTextareaChange}
                    onFocus={showCursorAtEnd}
                />
            ) : (
                <div className={classes.taskDesc} onClick={editTaskDesc}>
                    {props.taskDesc || "This task has no notes."}
                </div>
            )}
        </>
    );
};

export default TaskDesc;
