import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Header from "./Header";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import HomePage from "./HomePage";
import ForgotPassword from "./ForgotPassword";

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LogIn} />
            <Route path="/register" exact component={SignUp} />
            <Route path="/forgotpassword" exact component={ForgotPassword} />
        </Fragment>
    );
};

export default Home;
