import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from "@material-ui/icons/HomeTwoTone";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import BellIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";

import TaskBox from "./TaskBox";
import { getProject } from "../../../store/actions";
import { getTasks, createTask } from "../../../store/actions";

const styles = {
    root: {
        flexGrow: 1,
        "& header": {
            background: "white",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 5px 0px",
            zIndex: 1
        }
    },
    line: {
        width: "1px",
        height: "32px",
        backgroundColor: "#edf1f2",
        margin: "0 15px"
    },
    rightHeader: {
        display: "flex"
    },
    content: {
        display: "flex",
        background:
            "linear-gradient(-45deg, rgb(245, 247, 248), rgb(237, 241, 242) 100%)"
    }
};

class Project extends Component {
    componentDidMount() {
        this.props.getProject(this.props.match.params.projectId);
        this.props.getTasks(this.props.match.params.projectId);
    }
    createNewTask = newTask => {
        this.props.createTask(newTask, this.props.project._id);
    };
    render() {
        const { classes, project } = this.props;

        return (
            <>
                <div className={classes.root}>
                    <AppBar
                        style={{ background: "white !important" }}
                        position="static"
                        color="default"
                    >
                        <Toolbar>
                            <Link to="/app/dashboard">
                                <HomeIcon />
                            </Link>
                            <div className={classes.line} />
                            <div className={classes.project}>
                                {project ? project.name : ""}
                            </div>
                            <div className={classes.line} />
                            <div className={classes.rightHeader}>
                                <AddCircleIcon />
                                <div className={classes.line} />
                                <CheckCircleIcon />
                                <BellIcon />
                                <div className={classes.line} />
                                <SearchIcon />
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className={classes.content}>
                    <TaskBox
                        project={this.props.project}
                        tasks={this.props.tasks}
                        createTask={this.createNewTask}
                    />
                </div>
            </>
        );
    }
}
const mapDispatchToProps = () => {
    return "";
};
const mapStateToProps = (state, ownProps) => {
    return {
        project: state.projects.project,
        tasks: state.tasks.tasks
    };
};
export default connect(
    mapStateToProps,
    { getProject, getTasks, createTask }
)(withStyles(styles)(Project));
