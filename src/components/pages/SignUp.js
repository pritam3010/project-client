import React from "react";
import { connect } from "react-redux";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import SignUpForm from "./SignUpForm";
import { registerUser } from "../../store/actions";

const SignUp = props => {
    const onSubmit = formValues => {
        props.registerUser(formValues, props.history);
    };
    return (
        <GoogleReCaptchaProvider reCaptchaKey="6LeTa74UAAAAAKxh6ydTvVz6m3gm--oG_v_DrYFd">
            <SignUpForm onSubmit={onSubmit} />
        </GoogleReCaptchaProvider>
    );
};

export default connect(
    null,
    { registerUser }
)(SignUp);
