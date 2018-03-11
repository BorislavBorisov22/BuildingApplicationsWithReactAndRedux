import initialState from "./initialState";
import { STORE_UNSAVED_COURSE } from './../actions/actionTypes';

function unsavedCourseChangesReducer(state = initialState.unsavedCourseChangesReduces, action) {
    switch (action.type) {
        case STORE_UNSAVED_COURSE:
            return Object.assign({}, action.course);
        default: 
            return state;
    }
}

export default unsavedCourseChangesReducer;