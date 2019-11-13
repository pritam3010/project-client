import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link as RouterLink } from "react-router-dom";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import {
    Container,
    TextField,
    CssBaseline,
    Typography,
    Grid,
    Button,
    Link
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./SignUpForm.css";

const useStyles = makeStyles(theme => {
    return {
        paper: {
            marginTop: theme.spacing(14),
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        form: {
            width: "100%",
            marginTop: theme.spacing(3)
        },
        submit: {
            margin: theme.spacing(3, 0, 2)
        }
    };
});

const renderTextField = ({
    input,
    meta: { touched, error, warn },
    ...customs
}) => {
    console.log({ touched, error });
    return (
        <TextField
            error={touched && error}
            helperText={touched && error ? error : ""}
            {...input}
            {...customs}
        />
    );
};

const SignUpForm = props => {
    const classes = useStyles();
    const { executeRecaptcha } = useGoogleReCaptcha();

    const onSubmit = async formValues => {
        const token = await executeRecaptcha("signup_page");
        console.log(token);
        if (token) {
            props.onSubmit(formValues);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form
                    className={classes.form}
                    onSubmit={props.handleSubmit(onSubmit)}
                >
                    <input
                        type="password"
                        autoComplete="new-password"
                        style={{ display: "none" }}
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Field
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                type="text"
                                autoFocus
                                component={renderTextField}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field
                                name="lastName"
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                type="text"
                                component={renderTextField}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                name="email"
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                autoComplete="nope"
                                component={renderTextField}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                name="password"
                                label="password"
                                type="password"
                                autoComplete="new-password"
                                component={renderTextField}
                            />
                        </Grid>
                    </Grid>
                    <small>
                        This site is protected by reCAPTCHA and the Google&nbsp;
                        <RouterLink to="https://policies.google.com/privacy">
                            Privacy Policy&nbsp;
                        </RouterLink>
                        and&nbsp;
                        <RouterLink to="https://policies.google.com/terms">
                            Terms of Service&nbsp;
                        </RouterLink>
                        apply.
                    </small>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Register
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link
                                variant="body2"
                                component={RouterLink}
                                to="/login"
                            >
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

const validate = values => {
    console.log(values);
    const errors = {};
    const requiredFields = ["firstName", "lastName", "email", "password"];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = "Required";
        }
    });
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = "Invalid email address";
    }
    if (values.firstName && values.firstName.length < 3) {
        errors.firstName = "Must be 3 characters or more";
    }
    if (values.lastName && values.lastName.length < 3) {
        errors.lastName = "Must be 3 characters or more";
    }
    if (values.password && values.password.length < 5) {
        errors.password = "Password length should be greater than 5 ";
    }
    return errors;
};

export default reduxForm({ form: "signup", validate })(SignUpForm);
