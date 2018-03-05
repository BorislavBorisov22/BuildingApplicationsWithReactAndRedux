import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(actionType) {
    return actionType.substring(actionType.length - 8) === '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.numAjaxCallsInProgress, action) {
    if (action.type === actionTypes.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (actionTypeEndsInSuccess(action.type) || action.type === actionTypes.ERROR_AJAX_CALL) {
        return state - 1;
    }

    return state;
}