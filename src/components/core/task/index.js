import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";

import { getTask, updateTask, authCheckState } from "../../../store/actions";

import TaskName from "./TaskName";
import TaskDesc from "./TaskDesc";
import Checklist from "./Checklist";
import Attachment from "./Attachment";
import TaskExtra from "./TaskExtra";
import TastCreation from "./TaskCreation";
import Activity from "./Activity";
import CommentList from "./CommentList";
import { stat } from "fs";

const styles = theme => ({
    ".MuiDialog-paperScrollBody": {
        verticalAlign: "none"
    },
    modal: {
        background: "white",
        width: "700px",
        borderRadius: "10px"
    },
    top: {
        height: "75px",
        width: "100%",
        borderBottom: "1px solid #dce2e6",
        padding: "20px 20px 20px 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    btnComplete: {
        color: "white",
        backgroundColor: "#007bff",
        height: "35px",
        cursor: "pointer",
        fontWeight: 500,
        fontSize: "15px",
        border: "1px solid #007bff",
        borderRadius: "5px",
        paddingLeft: "15px",
        paddingRight: "15px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
    },
    closeIcon: {
        width: "35px",
        height: "35px",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        "& svg": {
            width: "16px",
            height: "16px"
        }
    },
    bottom: {
        display: "flex"
    },
    left: {
        width: "460px",
        padding: "20px",
        display: "flex",
        flexDirection: "column"
    },

    right: {
        width: "240px",
        borderLeft: "1px solid #dce2e6",
        borderBottomRightRadius: "10px",
        backgroundColor: "#f7f9fa",
        color: "#8a9499"
    }
});

class Task extends Component {
    state = {
        open: true,
        activity: [{ text: "Pritam created the task", createdAt: new Date() }]
    };
    componentDidMount() {
        this.props.getTask(this.props.match.params.taskId);
    }
    handleClose = () => {
        this.setState({ open: false });
        this.props.history.goBack();
    };
    updateTask = data => {
        this.props.updateTask(data, this.props.match.params.taskId);
    };
    handleDateChange = date => {
        let activity;
        if (!date) {
            activity = {
                text: "Pritam removed a due date",
                type: "DUEDATE"
            };
        } else {
            activity = {
                text: "Pritam set a due date",
                dueDate: date,
                type: "DUEDATE"
            };
        }
        this.updateTask({ dueDate: date, activity });
    };

    addComment = comment => {
        if (comment) {
            const activity = {
                text: comment,
                creator: "pritam",
                type: "comment"
            };

            this.updateTask({ activity });
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <Dialog
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
                scroll="body"
                maxWidth={false}
                style={{ verticalAlign: "top!important" }}
                className="MuiDialog-paperScrollBody"
            >
                {this.props.task ? (
                    <div className={classes.modal}>
                        <div className={classes.top}>
                            <div className={classes.btnComplete}>Complete</div>
                            <div
                                className={classes.closeIcon}
                                onClick={this.handleClose}
                            >
                                <CloseIcon />
                            </div>
                        </div>
                        <div className={classes.bottom}>
                            <div className={classes.left}>
                                <TaskName
                                    task={this.props.task.name}
                                    updateTask={this.updateTask}
                                />
                                <TaskDesc
                                    taskDesc={this.props.task.desc}
                                    updateTask={this.updateTask}
                                />
                                <Checklist
                                    checklistName={
                                        this.props.task.checklistName
                                    }
                                    checklists={this.props.task.checklist}
                                    updateTask={this.updateTask}
                                />
                                <Attachment />

                                <Activity
                                    // activity={this.props.task.activity}
                                    addComment={this.addComment}
                                />
                                <CommentList
                                    activity={this.props.task.activity}
                                />
                            </div>
                            <div className={classes.right}>
                                <TaskExtra
                                    handleDateChange={this.handleDateChange}
                                    dueDate={this.props.task.dueDate}
                                />
                                <TastCreation
                                    project={this.props.task.project.name}
                                    section={this.props.task.section}
                                    createdAt={this.props.task.createdAt}
                                    updatedAt={this.props.task.updatedAt}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </Dialog>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        task: state.tasks.task,
        project: state.projects.project
        // user: auth.user
    };
};

export default connect(
    mapStateToProps,
    { getTask, updateTask }
)(withStyles(styles)(Task));
