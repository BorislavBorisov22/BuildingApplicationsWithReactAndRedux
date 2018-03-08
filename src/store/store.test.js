import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from './../reducers/index';
import initialState from '../reducers/initialState';
import { createCourseSuccess } from './../actions/courseActions';

describe('Store', () => {
    it('Should handle creating courses', () => {
        // arrange 
        const store = createStore(rootReducer, initialState);
        const course = {
            title: 'Clean Code'
        };

        // act
        const action = createCourseSuccess(course);
        store.dispatch(action);

        // assert
        const actual = store.getState().courses[0];
        const expected = {
            title: 'Clean Code'
        };

        expect(expected).toEqual(actual);
    });
});
