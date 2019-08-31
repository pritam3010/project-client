import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import EditIcon from "@material-ui/icons/Edit";
import { format } from "date-fns";

const TaskCreation = props => {
    return (
        <div style={{ padding: "20px" }}>
            <div>
                <div
                    style={{
                        fontSize: "12px",
                        lineHeight: "16px",
                        fontWeight: 500
                    }}
                >
                    {props.project}
                </div>
                <div
                    style={{
                        fontSize: "12px",
                        fontWeight: 400
                    }}
                >
                    {props.section}
                </div>
            </div>
            <div
                style={{
                    marginTop: "10px",
                    display: "flex"
                }}
            >
                <AddCircleIcon
                    style={{
                        height: "16px",
                        width: "16px"
                    }}
                />
                <div style={{ paddingLeft: "12px" }}>
                    <div
                        style={{
                            fontSize: "12px",
                            fontWeight: 500,
                            lineHeight: "16px"
                        }}
                    >
                        Created
                    </div>
                    <div
                        style={{
                            fontSize: "12px",
                            fontWeight: 400
                        }}
                    >
                        {format(
                            new Date(props.createdAt),
                            "d MMMM, yyyy hh:mm a"
                        )}
                    </div>
                </div>
            </div>
            <div
                style={{
                    marginTop: "10px",
                    display: "flex"
                }}
            >
                <EditIcon
                    style={{
                        height: "16px",
                        width: "16px"
                    }}
                />
                <div style={{ paddingLeft: "12px" }}>
                    <div
                        style={{
                            fontSize: "12px",
                            fontWeight: 500,
                            lineHeight: "16px"
                        }}
                    >
                        Updated
                    </div>
                    <div
                        style={{
                            fontSize: "12px",
                            fontWeight: 400
                        }}
                    >
                        {format(
                            new Date(props.updatedAt),
                            "d MMMM, yyyy hh:mm a"
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCreation;
