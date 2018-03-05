import * as actionTypes from './actionTypes';

export function beginAjaxCall() {
    return { type : actionTypes.BEGIN_AJAX_CALL };
}

export function errorAjaxCall() {
    return { type: actionTypes.ERROR_AJAX_CALL };
}