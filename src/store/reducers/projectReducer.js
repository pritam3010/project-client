import {
    CREATE_PROJECT_SUCCESS,
    GET_PROJECTS_SUCCESS,
    GET_PROJECT_SUCCESS
} from "../actions/type";

const INITIALSTATE = {
    projects: null,
    project: null,
    error: false,
    loading: false
};

export default (state = INITIALSTATE, action) => {
    switch (action.type) {
        case CREATE_PROJECT_SUCCESS: {
            console.log(action.payload);
            return {
                ...state,
                projects: [...state.projects, action.payload.project]
            };
        }

        case GET_PROJECTS_SUCCESS:
            return {
                ...state,
                projects: action.projects,
                message: action.message
            };
        case GET_PROJECT_SUCCESS:
            return {
                ...state,
                project: { ...action.project }
            };
        default:
            return state;
    }
};
