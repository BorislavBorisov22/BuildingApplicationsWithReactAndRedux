import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccss(actionType) {
    return actionType.substring(actionType.length - 8) === '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.numAjaxCallsInProgress, action) {
    if (action.type === actionTypes.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (actionTypeEndsInSuccss(action.type)) {
        return state - 1;
    }

    return state;
}