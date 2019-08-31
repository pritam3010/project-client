import { push } from "connected-react-router";

import axiosConfig from "../../api/axios";
import GetToken from "./util";

import {
    CREATE_PROJECT_START,
    CREATE_PROJECT_SUCCESS,
    CREATE_PROJECT_FAIL,
    GET_PROJECTS_START,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAIL,
    GET_PROJECT_START,
    GET_PROJECT_SUCCESS,
    GET_PROJECT_FAIL
} from "./type";

export const createProject = newProject => async dispatch => {
    dispatch({ type: CREATE_PROJECT_START });
    try {
        const response = await axiosConfig.post("/app/project", newProject, {
            headers: { Authorization: `Bearer ${GetToken()}` }
        });
        dispatch({ type: CREATE_PROJECT_SUCCESS, payload: response.data });
    } catch (err) {
        console.log(err.response);
        dispatch({
            type: CREATE_PROJECT_FAIL,
            error: err.response.data.message
        });
    }
};
export const getProjects = () => async dispatch => {
    dispatch({ type: GET_PROJECTS_START });
    // const token = localStorage.getItem("token");

    try {
        const response = await axiosConfig.get("/app/project", {
            headers: { Authorization: `Bearer ${GetToken()}` }
        });

        dispatch({
            type: GET_PROJECTS_SUCCESS,
            projects: response.data.projects,
            message: response.data.message
        });
    } catch (err) {
        console.log(err.response);
        dispatch({ type: GET_PROJECTS_FAIL, error: err.response });
    }
};
export const getProject = id => async dispatch => {
    dispatch({ type: GET_PROJECT_START });
    try {
        const response = await axiosConfig.get(`/app/project/${id}`, {
            headers: { Authorization: `Bearer ${GetToken()}` }
        });
        dispatch({
            type: GET_PROJECT_SUCCESS,
            project: response.data.project,
            message: response.data.message
        });
    } catch (err) {
        console.log(err.response);
        dispatch({ type: GET_PROJECT_FAIL, error: err.response.data });
    }
};
