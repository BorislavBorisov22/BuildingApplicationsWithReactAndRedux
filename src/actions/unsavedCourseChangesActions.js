import { STORE_UNSAVED_COURSE } from './actionTypes';

export function storeUnsavedChanges(course) {
    return { type: STORE_UNSAVED_COURSE, course };
}