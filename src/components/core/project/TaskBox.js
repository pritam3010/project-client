import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/core/styles";

import "react-perfect-scrollbar/dist/css/styles.css";
import NewSection from "./NewSection";
import Section from "./Section";
import TaskList from "./TaskList";

const useStyles = makeStyles({
    box: {
        width: "320px",
        minWidth: "320px",
        height: "calc(100vh - 64px)",
        background: "transparent",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "hidden"
    },
    task: {
        width: "inherit",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5px"
    }
});
const TaskBoxList = props => {
    const classes = useStyles();
    const renderTaskBox = () => {};

    const getTaskBySection = section => {
        if (props.tasks) {
            const tasks = props.tasks.filter(
                task => task.section.toLowerCase() === section.toLowerCase()
            );
            return tasks;
        }
    };
    return (
        <>
            {props.project ? (
                <PerfectScrollbar
                    style={{ display: "flex", flex: 1, width: "100%" }}
                >
                    {props.project.sections.map((section, i) => {
                        const background =
                            i % 2 === 0 ? "transparent" : "rgba(0, 0, 0, 0.02)";
                        return (
                            <div
                                key={i}
                                className={classes.box}
                                style={{
                                    background: background
                                }}
                            >
                                <Section
                                    tabName={section.name}
                                    tabColor={section.color}
                                />
                                <PerfectScrollbar
                                    style={{
                                        position: "relative",
                                        width: "100%"
                                    }}
                                >
                                    <div className={classes.task}>
                                        <TaskList
                                            tasks={getTaskBySection(
                                                section.name
                                            )}
                                            section={section.name}
                                            createTask={props.createTask}
                                        />
                                    </div>
                                </PerfectScrollbar>
                            </div>
                        );
                    })}
                    <NewSection sectionLength={props.project.sections.length} />
                </PerfectScrollbar>
            ) : (
                ""
            )}
        </>
    );
};

export default TaskBoxList;
