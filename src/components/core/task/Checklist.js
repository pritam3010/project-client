import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import ChecklistItem from "./ChecklistItem";
import UID from "uuid/v4";

import AddItemText from "./AddItemText";

const useStyles = makeStyles(theme => ({
    container: {
        width: "100%",
        padding: "0 10px",
        display: "flex",
        alignItems: "center",
        "&:hover": {
            backgroundColor: "#f7f9fa",
            borderRadius: "5px"
        }
    },
    nameInput: {
        padding: "8px 0",
        width: "100%",
        fontSize: "16px",
        fontWeight: "500",
        borderWidth: 0,
        outline: "none",
        color: "#3d474d",
        textOverflow: "ellipsis",
        backgroundColor: "transparent"
        // "&:hover": {
        //     backgroundColor: "#f7f9fa",
        //     borderRadius: "5px"
        // }
    }
}));

const Checklist = props => {
    const classes = useStyles();
    const [checklist, setChecklist] = useState({ name: "", data: [] });
    const [showInput, setShowInput] = useState(true);

    const [check, setCheck] = useState(false);

    const handleClick = () => {
        if (!checklist.name) {
            setChecklist({ ...checklist, name: "Checklist" });
        }
        setCheck(true);
    };
    const handleFocus = e => {
        e.target.select();
    };
    const addChecklist = item => {
        setShowInput(false);
        setCheck(false);
        if (item) {
            const checklist = { item: item, status: false };
            props.updateTask({ checklist });
        }
    };
    const editChecklist = (id, item) => {
        // if (item) {
        //     const index = props.checklist.findIndex(
        //         checklist => checklist._id === id
        //     );
        //     const updatedChecklist = { ...checklist.data[index], text: item };
        //     const newChecklistData = checklist.data;
        //     newChecklistData[index] = updatedChecklist;
        //     console.log(newChecklistData);
        //     setChecklist({ ...checklist, data: [...newChecklistData] });
        // }
    };
    const toggleChecklistStatus = id => {
        // const index = checklist.data.findIndex(
        //     checklist => checklist.id === id
        // );
        // const updatedChecklist = {
        //     ...checklist.data[index],
        //     status: !checklist.data[index].status
        // };
        // const newChecklistData = checklist.data;
        // newChecklistData[index] = updatedChecklist;
        // console.log(newChecklistData);
        // setChecklist({ ...checklist, data: [...newChecklistData] });
    };
    const removeChecklist = id => {
        const updatedChecklistData = checklist.data.filter(
            checklist => checklist.id !== id
        );
        setChecklist({ ...checklist, data: [...updatedChecklistData] });
    };
    const renderChecklistTiltle = () => {
        return !props.checklistName ? (
            ""
        ) : (
            <div>
                <div className={classes.container}>
                    <input
                        className={classes.nameInput}
                        placeholder="Checklist"
                        defaultValue="Checklist"
                        onFocus={handleFocus}
                        maxLength={100}
                    />
                </div>
            </div>
        );
    };

    return (
        <>
            {renderChecklistTiltle()}
            {props.checklists.map(checklist => {
                return (
                    <ChecklistItem
                        key={checklist._id}
                        id={checklist._id}
                        {...checklist}
                        editChecklist={editChecklist}
                        addChecklist={addChecklist}
                        toggleChecklistStatus={toggleChecklistStatus}
                        removeChecklist={removeChecklist}
                    />
                );
            })}
            {check ? (
                <ChecklistItem addChecklist={addChecklist} showInput />
            ) : (
                ""
            )}
            <AddItemText text="Add Checklist Item" onClick={handleClick} />
        </>
    );
};

export default Checklist;
