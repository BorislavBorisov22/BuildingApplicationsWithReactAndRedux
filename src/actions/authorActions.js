import authorApi from './../api/mockAuthorApi';
import { LOAD_AUTHORS_SUCCESS } from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
    return { type: LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return authorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(err => {
            throw err;
        });
    };
} 