import {
    SIGN_UP_ERROR,
    SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    SIGN_OUT
} from "../actions/type";

const INITIAL_STATE = {
    isSignedIn: false,
    user: null,
    userId: null,
    error: null,
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN_START: {
            return {
                ...state,
                loading: true
            };
        }
        case SIGN_IN_SUCCESS: {
            console.log(action);
            return {
                ...state,
                isSignedIn: true,
                loading: false,
                user: action.user,
                userId: action.userId
            };
        }
        case SIGN_IN_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        case SIGN_OUT:
            return {
                ...state,
                isSignedIn: false,
                user: null,
                userId: null,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};
