import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Header from "./Header";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import HomePage from "./HomePage";
import ForgotPassword from "./ForgotPassword";
import Loggedout from "./Loggedout";

const Home = () => {
    return (
        <>
            <Header />
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LogIn} />
            <Route path="/register" exact component={SignUp} />
            <Route path="/forgot-password" exact component={ForgotPassword} />
            <Route path="/loggedout" exact component={Loggedout} />
        </>
    );
};

export default Home;
