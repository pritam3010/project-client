import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SearchIcon from "@material-ui/icons/Search";
import Popover from "@material-ui/core/Popover";
import {
    usePopupState,
    bindTrigger,
    bindPopover
} from "material-ui-popup-state/hooks";
import { signOut } from "../../../store/actions/auth";
import user from "../../../assests/svg/pepole.svg";
import logout from "../../../assests/svg/logout.svg";
import gear from "../../../assests/svg/gear.svg";

const useStyles = makeStyles(theme => ({
    header: {
        height: "80px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0 30px",
        color: "white"
    },
    addIcon: {
        width: "64px",
        height: "32px",
        padding: "0 20px",
        "& svg path:last-of-type": {
            width: "24px",
            height: "24px",
            cursor: "pointer"
        }
    },
    SearchIcon: {
        height: "32px",
        width: "64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& svg": {
            width: "26px",
            height: "100% !important",
            cursor: "pointer"
        }
    },
    name: {
        background: "rgba(255, 255, 255, 0.4)",
        borderRadius: "100%",
        height: "32px",
        width: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "20px",
        cursor: "pointer"
    }
}));

const Header = props => {
    const classes = useStyles();
    const { auth } = props;

    const popupState = usePopupState({
        variant: "popover",
        popupId: "demoPopover"
    });

    const renderInitial = () => {
        if (!auth.user) {
            return "HI";
        }
        return auth.user.initial;
    };
    const signOut = () => {
        props.signOut();
    };
    return (
        <header className={classes.header}>
            <div className={classes.addIcon}>
                <AddCircleIcon />
            </div>
            <div className={classes.SearchIcon}>
                <SearchIcon style={{ height: "24px" }} />
            </div>
            <div>
                <div className={classes.name} {...bindTrigger(popupState)}>
                    {renderInitial()}
                </div>
                <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center"
                    }}
                >
                    <div style={{ width: "220px" }}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                marginTop: "20px",
                                width: "100%"
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center"
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "96px",
                                        height: "96px",
                                        borderRadius: "100%",
                                        boxShadow:
                                            "rgb(0, 170, 255) 0px 0px 0px 0px inset"
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transform: "scaleX(1) scaleY(1)"
                                        }}
                                    >
                                        <img
                                            src={user}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                color: "#8A9499"
                                            }}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    textAlign: "center",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    margin: "15px 0 10px",
                                    padding: "0 10px",
                                    color: "#3d474d"
                                }}
                            >
                                Pritam Kumar
                            </div>
                            <div
                                style={{
                                    height: "1px",
                                    marginTop: "4px",
                                    backgroundColor: "#edf1f2"
                                }}
                            ></div>
                            <div style={{ padding: "15px 0" }}>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "100%"
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            minHeight: "40px",
                                            cursor: "pointer"
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                flexGrow: 1,
                                                flexShrink: 1,
                                                alignItems: "center",
                                                margin: "0 10px",
                                                padding: "8px 10px",
                                                minHeight: "40px",
                                                borderRadius: "5px",
                                                backgroundColor: "#edf1f2"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    paddingRight: "10px"
                                                }}
                                            >
                                                <img
                                                    src={gear}
                                                    style={{
                                                        height: "24px",
                                                        width: "24px"
                                                    }}
                                                    alt=""
                                                />
                                            </div>
                                            <div
                                                style={{
                                                    width: "100%",
                                                    fontSize: "14px",
                                                    lineHeight: "20px",
                                                    color: "#3d474d",
                                                    alignItems: "center"
                                                }}
                                            >
                                                My Account
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "100%"
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            minHeight: "40px",
                                            cursor: "pointer"
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                flexGrow: 1,
                                                flexShrink: 1,
                                                alignItems: "center",
                                                margin: "0 10px",
                                                padding: "8px 10px",
                                                minHeight: "40px",
                                                borderRadius: "5px"
                                                // backgroundColor: "#edf1f2"
                                            }}
                                            onClick={signOut}
                                        >
                                            <div
                                                style={{
                                                    paddingRight: "10px"
                                                }}
                                            >
                                                <img
                                                    src={logout}
                                                    style={{
                                                        height: "24px",
                                                        width: "24px"
                                                    }}
                                                    alt=""
                                                />
                                            </div>
                                            <div
                                                style={{
                                                    width: "100%",
                                                    fontSize: "14px",
                                                    lineHeight: "20px",
                                                    color: "#3d474d",
                                                    alignItems: "center"
                                                }}
                                            >
                                                Log Out
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Popover>
            </div>
        </header>
    );
};

const mapStateToProps = state => {
    return { auth: state.auth };
};
export default connect(
    mapStateToProps,
    { signOut }
)(Header);
