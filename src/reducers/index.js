import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import unsavedCourse from './unsavedCourseChangesReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallsInProgress,
    unsavedCourse
});

export default rootReducer;