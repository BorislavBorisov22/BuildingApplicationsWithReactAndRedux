import * as actionTypes from "./actionTypes";
import courseApi from "../api/mockCourseApi";
import { beginAjaxCall, errorAjaxCall } from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
    return { type: actionTypes.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
    return { type: actionTypes.UPDATE_COURSE_SUCCESS, course };
}

export function createCourseSuccess(course) {
    return { type: actionTypes.CREATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then((courses) => {
            dispatch(loadCoursesSuccess(courses));
        }).catch((err) => {
            throw err;
        });
    };
}

export function saveCourse(course) {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
                dispatch(createCourseSuccess(savedCourse));
        }).catch(err => {
            dispatch(errorAjaxCall());
            throw err;
        });
    };
}