import axiosConfig from "../../api/axios";
import {
    GET_TASKS_START,
    GET_TASKS_SUCCESS,
    GET_TASKS_FAIL,
    GET_TASK_START,
    GET_TASK_SUCCESS,
    GET_TASK_FAIL,
    CREATE_TASK_START,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_FAIL,
    UPDATE_TASK_START,
    UPDATE_TASK_SUCCESS,
    UPDATE_TASK_FAIL
} from "./type";

import GetToken from "./util";

export const createTask = (newTask, projectId) => async dispatch => {
    dispatch({ type: CREATE_TASK_START });
    try {
        const response = await axiosConfig.post(
            `/app/project/${projectId}/task`,
            newTask,
            {
                headers: { Authorization: `Bearer ${GetToken()}` }
            }
        );
        dispatch({ type: CREATE_TASK_SUCCESS, task: response.data.task });
    } catch (err) {
        console.log(err.response.data);
        dispatch({ type: CREATE_TASK_FAIL, error: err.response.data });
    }
};

export const getTasks = projectId => async dispatch => {
    dispatch({ type: GET_TASKS_START });
    try {
        const response = await axiosConfig.get(
            `/app/project/${projectId}/task`,
            {
                headers: { Authorization: `Bearer ${GetToken()}` }
            }
        );

        dispatch({
            type: GET_TASKS_SUCCESS,
            tasks: response.data.tasks,
            projectId: projectId
        });
    } catch (err) {
        if (err.response) {
            console.log(err.response);
            dispatch({ type: GET_TASKS_FAIL, error: err.response.data });
        } else if (err.request) {
            console.log(err.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log(err.message);
        }
        console.log(err.config);
    }
};

export const getTask = taskId => async dispatch => {
    dispatch({ type: GET_TASK_START });
    try {
        const response = await axiosConfig.get(`/app/task/${taskId}`, {
            headers: { Authorization: `Bearer ${GetToken()}` }
        });
        dispatch({
            type: GET_TASK_SUCCESS,
            task: response.data.task,
            project: response.data.task.project
        });
    } catch (err) {
        if (err.response) {
            console.log(err.response);
            dispatch({ type: GET_TASK_FAIL, error: err.response.data });
        } else if (err.request) {
            console.log(err.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log(err.message);
        }
        console.log(err.config);
    }
};

export const updateTask = (updatedTask, taskId) => async dispatch => {
    dispatch({ type: UPDATE_TASK_START });
    console.log(updatedTask);
    try {
        const response = await axiosConfig.patch(
            `/app/task/${taskId}`,
            updatedTask,
            {
                headers: { Authorization: `Bearer ${GetToken()}` }
            }
        );

        dispatch({
            type: UPDATE_TASK_SUCCESS,
            updatedTask: response.data.task
        });
    } catch (err) {
        if (err.response) {
            console.log(err.response);
            dispatch({ type: UPDATE_TASK_FAIL, error: err.response.data });
        } else if (err.request) {
            console.log(err.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log(err.message);
        }
        console.log(err.config);
    }
};
