import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Open from "@material-ui/icons/AlternateEmail";

const useStyles = makeStyles({
    title: {
        minHeight: "60px",
        padding: "0 20px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        fontSize: "20px",
        boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
    },
    icon: {
        margin: "auto 0",
        marginRight: "15px"
    },
    task: {
        width: "inherit",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5px"
    },
    tabInput: {
        boxSizing: "border-box",
        display: "inline-block",
        transform: "translateX(-5px)",
        padding: "5px",
        borderRadius: "5px",
        border: "none",
        background: "#fff",
        "&:focus": {
            outline: "none"
        }
    }
});

const Section = props => {
    const classes = useStyles();

    const [showTabInput, setShowTabInput] = useState(false);
    // const [task, setTask] = useState([]);

    const renderTabInput = e => {
        setShowTabInput(true);
    };
    const handleInput = () => {
        setShowTabInput(false);
    };
    const handleFocus = e => {
        e.target.select();
    };
    return (
        <div
            className={classes.title}
            style={{ backgroundColor: props.tabColor }}
        >
            <div
                style={{
                    height: "100%",
                    display: "flex",
                    flexGrow: 1,
                    flexShrink: 1,
                    alignItems: "center"
                }}
            >
                <Open className={classes.icon} />
                {!showTabInput ? (
                    <div
                        onClick={renderTabInput}
                        style={{
                            display: "flex",
                            flexGrow: 1,
                            flexShrink: 1
                        }}
                    >
                        {props.tabName}
                    </div>
                ) : (
                    <input
                        className={classes.tabInput}
                        value={props.tabName}
                        autoFocus
                        onFocus={handleFocus}
                        onBlur={handleInput}
                    />
                )}
            </div>
        </div>
    );
};

export default Section;
