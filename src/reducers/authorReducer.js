import { LOAD_AUTHORS_SUCCESS } from "../actions/actionTypes";
import initialState from "./initialState";
import { DELETE_AUTHOR_SUCCESS } from './../actions/actionTypes';

export default function authorReducer(state = initialState.authors, action) {
    switch(action.type) {
        case LOAD_AUTHORS_SUCCESS: 
          return action.authors;
        case DELETE_AUTHOR_SUCCESS:
            return state.filter(a => a.id !== action.authorId);
        default:
            return state;
    }
}