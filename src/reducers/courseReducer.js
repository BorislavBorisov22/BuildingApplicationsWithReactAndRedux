import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
    switch(action.type) {
        case actionTypes.LOAD_COURSES_SUCCESS: 
            return action.courses;
        case actionTypes.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        case actionTypes.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(c => c.id !== action.course.id),
                Object.assign({}, action.course)
            ];
        case actionTypes.DELETE_COURSE_SUCCESS: 
            return state.filter(c => c.id !== action.courseId);
        default: 
            return state;
    }
}