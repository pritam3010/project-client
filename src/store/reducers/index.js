import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";

import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import taskReducer from "./taskReducer";

export default history =>
    combineReducers({
        router: connectRouter(history),
        form: formReducer,
        auth: authReducer,
        projects: projectReducer,
        tasks: taskReducer
    });
