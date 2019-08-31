import React from "react";
import { connect } from "react-redux";

import LogInForm from "./LogInForm";
import Status from "../usable/Status";
import { signIn } from "../../store/actions";

const LogIn = props => {
    const onSubmit = formValues => {
        props.signIn(formValues, props.history);
    };
    return (
        <>
            <LogInForm onSubmit={onSubmit} />
            {props.loading ? <Status msg={"loading"} /> : ""}
            {props.error ? <Status msg={"Error"} /> : ""}
        </>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    };
};

export default connect(
    mapStateToProps,
    { signIn }
)(LogIn);
