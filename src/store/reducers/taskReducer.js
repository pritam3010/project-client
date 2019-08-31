import {
    // CREATE_TASK_START,
    // GET_TASKS_START,
    // GET_TASK_START,
    // UPDATE_TASK_START,
    // CREATE_TASK_FAIL,
    // GET_TASKS_FAIL,
    // GET_TASK_FAIL,
    // UPDATE_TASK_FAIL,
    CREATE_TASK_SUCCESS,
    GET_TASKS_SUCCESS,
    GET_TASK_SUCCESS,
    UPDATE_TASK_SUCCESS
} from "../actions/type";

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_TASK_SUCCESS:
            return { ...state, tasks: [...state.tasks, action.task] };
        case GET_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.tasks,
                projectId: action.projectId
            };
        case GET_TASK_SUCCESS:
            return { ...state, task: action.task, projectId: action.projectId };
        case UPDATE_TASK_SUCCESS:
            return { ...state, task: { ...state.task, ...action.updatedTask } };
        default:
            return state;
    }
};
