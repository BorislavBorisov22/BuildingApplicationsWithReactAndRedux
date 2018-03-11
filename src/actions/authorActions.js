import authorApi from './../api/mockAuthorApi';
import { LOAD_AUTHORS_SUCCESS, DELETE_AUTHOR_SUCCESS, CREATE_AUTHOR_SUCCESS, UPDATE_AUTHOR_SUCCESS } from './actionTypes';
import { beginAjaxCall, errorAjaxCall } from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
    return { type: LOAD_AUTHORS_SUCCESS, authors };
}

export function deleteAuthorSuccess(authorId) {
    return { type: DELETE_AUTHOR_SUCCESS, authorId };
}

export function createAuthorSuccess(author) {
    return { type: CREATE_AUTHOR_SUCCESS, author};
}

export function updateAuthorSuccess(author) {
    return {type: UPDATE_AUTHOR_SUCCESS, author};
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

export function deleteAuthor(authorId) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return authorApi.deleteAuthor(authorId).then(() => {
            dispatch(deleteAuthorSuccess(authorId));
        }).catch(err => {
            throw err;
        });
    };
}

export function saveAuthor(author) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return authorApi.saveAuthor(author).then((savedAuthor) => {
            author.id ? 
                dispatch(updateAuthorSuccess(author)) :
                dispatch(createAuthorSuccess(savedAuthor));
        }).catch(err => {
            errorAjaxCall();
            throw err;
        });
    };
}