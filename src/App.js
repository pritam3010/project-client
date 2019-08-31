import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import decoder from "jwt-decode";
import { connect } from "react-redux";

import Homepage from "./components/pages/Home";
import Dashboard from "./components/core/dashboard";
import Project from "./components/core/project";
import Task from "./components/core/task";
import { signOut } from "./store/actions";

function checkAuth(signOut) {
    const token = localStorage.getItem("token");
    if (!token) {
        return false;
    }
    try {
        const { exp } = decoder(token);
        if (exp < new Date().getTime() / 1000) {
            signOut();
            return false;
        }
    } catch (err) {
        console.log(err);
        return false;
    }

    return true;
}

function AuthRoute(p) {
    const { render: Render, signOut, ...rest } = p;
    return (
        <Route
            {...rest}
            render={props =>
                checkAuth(signOut) ? (
                    <Render {...props} />
                ) : (
                    <Redirect to={{ pathname: "/login" }} />
                )
            }
        />
    );
}

class App extends Component {
    // state = { isModal: false, location: {} };
    // getLocation = (location, isModal) => {
    //     this.setState({ location: { ...location }, isModal });
    // };
    // previousLocation = this.props.location;

    // componentWillUpdate(nextProps) {
    //     let { location } = this.props;

    //     // set previousLocation if props.location is not modal
    //     if (
    //         nextProps.history.action !== "POP" &&
    //         (!location.state || !location.state.modal)
    //     ) {
    //         this.previousLocation = this.props.location;
    //     }
    // }

    render() {
        // let { location } = this.props;

        // let isModal = !!(
        //     location.state &&
        //     location.state.modal &&
        //     this.previousLocation !== location
        // ); // not initial render
        return (
            <Switch
            // location={isModal ? this.previousLocation : location}
            >
                <AuthRoute
                    path="/app/dashboard"
                    exact
                    render={routeProps => <Dashboard {...routeProps} />}
                    signOut={this.props.signOut}
                />
                <AuthRoute
                    path="/app/project/:projectId"
                    exact
                    render={routeProps => (
                        <Project
                            {...routeProps}
                            getLocation={this.getLocation}
                        />
                    )}
                    signOut={this.props.signOut}
                />
                <AuthRoute
                    path="/app/task/:taskId"
                    exact
                    render={routeProps => <Task {...routeProps} />}
                    signOut={this.props.signOut}
                />

                <Homepage />
            </Switch>
        );
    }
}
const mapStateToProps = state => {
    return { loc: state.router.location };
};
export default withRouter(
    connect(
        mapStateToProps,
        { signOut }
    )(App)
);
