import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";

import "react-perfect-scrollbar/dist/css/styles.css";

const backdropStyle = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(138, 148, 153, 0.8)"
};
const backdropStyle1 = {
    flexShrink: 1,
    flexGrow: 1,
    width: "100%",
    overflow: "hidden",
    position: "relative",
    maxHeight: "100%",
    minHeight: "0px",
    height: "100%"
};
const modalStyle = {
    position: "relative",
    flexGrow: 1,
    flexShrink: 0,
    minHeight: 0,
    width: "100%",
    boxSizing: "border-box"
};

const footerStyle = {
    position: "absolute",
    bottom: 20
};

const modalRoot = document.getElementById("modal");

const Modal = props => {
    const element = document.createElement("div");

    const onClose = e => {
        console.log("BUTTON CLICKED");
        e.stopPropagation();
        props.onClose && props.onClose(e);
    };
    useEffect(() => {
        modalRoot.appendChild(element);
        return () => {
            modalRoot.removeChild(element);
        };
    });
    var modalUI = (
        <div style={backdropStyle}>
            <div
                style={{
                    display: "flex",
                    flexGrow: 1,
                    flexShrink: 1,
                    width: "100%",
                    height: "100%",
                    minHeight: "0px",
                    maxHeight: "100%",
                    overflow: "hidden auto",
                    position: "relative"
                }}
            >
                {props.children}
            </div>
        </div>
    );
    if (!props.show) {
        return null;
    }
    return ReactDOM.createPortal(modalUI, element);
};

export default Modal;

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};
