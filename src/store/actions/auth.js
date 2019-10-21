import { push } from "connected-react-router";

import axiosConfig from "../../api/axios";

import {
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR,
    SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    SIGN_OUT
} from "./type";

export const signUpStart = () => {
    return { type: SIGN_UP_START };
};

export const signUpSuccess = () => {
    return {
        type: SIGN_UP_SUCCESS
    };
};
export const signUpError = error => {
    console.log(error);
    return { type: SIGN_UP_ERROR, error: error.message };
};

export const signInStart = () => {
    return {
        type: SIGN_IN_START
    };
};
export const signInSuccess = data => {
    return {
        type: SIGN_IN_SUCCESS,
        user: data.user,
        userId: data.userId
    };
};
export const signInError = error => {
    console.log(error);
    return {
        type: SIGN_IN_ERROR,
        error: error.message
    };
};
export const registerUser = (formValues, history) => async dispatch => {
    dispatch(signUpStart());
    try {
        const response = await axiosConfig.put("account/register", formValues);
        console.log(response);
        dispatch({ type: SIGN_UP_SUCCESS, payload: response.data });
        dispatch(push("/login"));
        // history.push("/login");
    } catch (err) {
        dispatch(signUpError(err.response.data));
    }
};

export const signIn = (formValues, history) => async dispatch => {
    dispatch(signInStart());
    try {
        const response = await axiosConfig.post("account/login", formValues);
        localStorage.setItem("token", response.data.token);
        // localStorage.setItem("expirationDate", expirationDate);

        dispatch(signInSuccess(response.data));
        // dispatch(checkAuthTimeout(response.data.expiresIn));
        dispatch(push("/app/dashboard"));
        // history.push("/app/dashboard");
    } catch (err) {
        dispatch(signInError(err));
        if (err.response) {
            console.log(err.response);
            dispatch(signInError(err));
            // dispatch({ type: GET_TASKS_FAIL, error: err.response.data });
        } else if (err.request) {
            console.log(err.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log(err.message);
        }
        console.log(err.config);
    }
};

export const signOut = () => {
    localStorage.removeItem("token");
    return { type: SIGN_OUT };
};

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(signOut());
        }, expirationTime * 1000);
    };
};

// export const setAuthRedirectPath = path => {
//     return {
//         type: actionTypes.SET_AUTH_REDIRECT_PATH,
//         path: path
//     };
// };

export const authCheckState = () => dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
        dispatch(signOut());
    } else {
        const expirationDate = new Date(localStorage.getItem("expirationDate"));
        if (expirationDate <= new Date()) {
            dispatch(signOut());
        } else {
            const userId = localStorage.getItem("userId");
            dispatch(signUpSuccess(token, userId));
            dispatch(
                checkAuthTimeout(
                    (expirationDate.getTime() - new Date().getTime()) / 1000
                )
            );
        }
    }
};
