import { LOAD_AUTHORS_SUCCESS, UPDATE_AUTHOR_SUCCESS,  DELETE_AUTHOR_SUCCESS, CREATE_AUTHOR_SUCCESS } from '../actions/actionTypes';
import initialState from "./initialState";

export default function authorReducer(state = initialState.authors, action) {
    switch(action.type) {
        case LOAD_AUTHORS_SUCCESS: 
          return action.authors;
        case DELETE_AUTHOR_SUCCESS:
            return state.filter(a => a.id !== action.authorId);
        case CREATE_AUTHOR_SUCCESS: 
            return [
                ...state,
                Object.assign({}, action.author)
            ];
        case UPDATE_AUTHOR_SUCCESS: 
            return [
                ...state.filter(a => a.id !== action.author.id),
                Object.assign({}, action.author)
            ];
        default:
            return state;
    }
}