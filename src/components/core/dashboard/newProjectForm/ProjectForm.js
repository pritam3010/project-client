import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";

import Modal from "../../../usable/Modal";
import getDefaultSections from "./getDefaultSections";

import { ReactComponent as Clear } from "../../../../assests/svg/clear.svg";
import { ReactComponent as ProjectIcon } from "../../../../assests/svg/project.svg";

const useStyles = makeStyles({
    container: {
        width: "600px",
        display: "flex",
        flexDirection: "column",
        background: "white",
        borderRadius: "10px"
    },
    form: {
        margin: "30px 30px 20px",
        display: "flex"
    },
    projectIcon: {
        height: "48px",
        width: "48px",
        color: "#8a9499",
        marginRight: 0
    },
    projectForm: {
        margin: "0 5px",
        display: "flex",
        flexShrink: 1,
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    projectName: {
        padding: "0 10px",
        display: "flex",
        flexGrow: 1,
        flexShrink: 1,
        borderRadius: "5px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontSize: "22px",
        lineHeight: "30px",
        fontWeight: 500,
        color: "#3d474d",
        backgroundColor: "#f7f9fa"
    },
    projectDesc: {
        padding: "0 10px",
        display: "flex",
        flexGrow: 1,
        flexShrink: 1,
        borderRadius: "5px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontSize: "15px",
        lineHeight: "22px",
        fontWeight: 400,
        color: "#3d474d",
        backgroundColor: ""
    },
    buttons: {
        display: "flex",
        flexGrow: 1,
        padding: "0 30px 30px"
    }
});

const ProjectForm = props => {
    const classes = useStyles();
    const { open, handleClose, onFormSubmit } = props;

    const [projectName, setPorjectName] = useState("");
    const [projectDesc, setPorjectDesc] = useState("");

    function handleNameChange(e) {
        setPorjectName(e.target.value);
    }
    function hadnleDescChange(e) {
        setPorjectDesc(e.target.value);
    }
    function handleProjectForm() {
        const newProject = {
            name: projectName,
            desc: projectDesc,
            sections: getDefaultSections()
        };
        setPorjectName("");
        setPorjectDesc("");
        onFormSubmit(newProject);
    }
    return (
        <Modal show={open} onClose={handleClose}>
            <div className={classes.container}>
                <div className={classes.form}>
                    <div
                        style={{ display: "flex", flexGrow: 1, flexShrink: 1 }}
                    >
                        <div className={classes.projectIcon}>
                            <ProjectIcon />
                        </div>
                        <div className={classes.projectForm}>
                            <div style={{ display: "flex" }}>
                                <InputBase
                                    fullWidth
                                    placeholder="New Project"
                                    id="projectName"
                                    name="projectName"
                                    autoComplete="off"
                                    value={projectName}
                                    onChange={handleNameChange}
                                    className={classes.projectName}
                                />
                            </div>
                            <div style={{ display: "flex" }}>
                                <InputBase
                                    placeholder="Click to add description"
                                    id="projectDesc"
                                    name="projectDesc"
                                    autoComplete="off"
                                    value={projectDesc}
                                    onChange={hadnleDescChange}
                                    className={classes.projectDesc}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div
                            style={{
                                width: "24px",
                                height: "24px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer"
                            }}
                            onClick={props.handleClose}
                        >
                            <div
                                style={{
                                    width: "10px",
                                    height: "10px",
                                    fill: "#8a9499",
                                    transform: "translateY(-30%)"
                                }}
                            >
                                <Clear />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.buttons}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            width: "100%",
                            paddingTop: "20px"
                        }}
                    >
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            style={{ marginLeft: "10px" }}
                            variant="contained"
                            disabled={!projectName}
                            color="primary"
                            onClick={handleProjectForm}
                        >
                            Create Project
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ProjectForm;
