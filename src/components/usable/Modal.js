import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";

// import "react-perfect-scrollbar/dist/css/styles.css";

// gray background
const backdropStyle = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(138, 148, 153, 0.8)"
    // padding: 50
};
const backdropStyle1 = {
    display: "flex",
    flexGrow: 1,
    flexShrink: 1,
    width: "100%",
    height: "100%",
    minHeight: "0px",
    maxHeight: "100%",
    overflow: "hidden auto",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    margin: "50px auto"
};

const modalStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    maxWidth: 500,
    minHeight: 300,
    margin: "50px auto",
    padding: 30,
    position: "relative"
};

const footerStyle = {
    position: "absolute",
    bottom: 20
};
const modalRoot = document.getElementById("modal");

class Modal extends React.Component {
    constructor(props) {
        super(props);
        // We create an element div for this modal
        this.element = document.createElement("div");
    }
    onClose = e => {
        console.log("BUTTON CLICKED");
        e.stopPropagation();
        this.props.onClose && this.props.onClose(e);
    };
    // We append the created div to the div#modal
    componentDidMount() {
        modalRoot.appendChild(this.element);
    }
    /**
     * We remove the created div when this Modal Component is unmounted
     * Used to clean up the memory to avoid memory leak
     */
    componentWillUnmount() {
        modalRoot.removeChild(this.element);
    }
    render() {
        var modalUI = (
            <div style={backdropStyle}>
                <div style={backdropStyle1}>{this.props.children}</div>
            </div>
        );
        if (!this.props.show) {
            return null;
        }
        return ReactDOM.createPortal(modalUI, this.element);
    }
}

export default Modal;

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};
