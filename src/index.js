import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";

import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/lightBlue";

import App from "./App";
import store from "./store/storeConfig";
import history from "./history";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#007bff"
        },
        secondary: green
    },
    status: {
        danger: "pink"
    }
});

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router history={history}>
                <Route component={App} />
            </Router>
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);

// import * as serviceWorker from "./serviceWorker";
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
