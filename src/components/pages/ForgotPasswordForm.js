import React from "react";
import { Field, reduxForm } from "redux-form";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
    TextField,
    CssBaseline,
    Container,
    Typography,
    Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    formBox: {
        marginTop: theme.spacing(14),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const renderTextField = ({ input, ...customs }) => {
    return <TextField {...input} {...customs} />;
};

const ForgotPasswordForm = () => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.formBox}>
                <Typography component="h6" variant="h4" gutterBottom>
                    Forgot Password
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Please enter your email address below. Further instructions
                    will be sent to you on email.
                </Typography>
                <form className={classes.form}>
                    <Field
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="Email"
                        type="email"
                        placeholder="Enter you email"
                        component={renderTextField}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default reduxForm({ form: "ForgotPassword" })(ForgotPasswordForm);
