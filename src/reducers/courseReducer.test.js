import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course reducer', () => {
    it('should add course when passed CREATE_COURSE_SUCCESS', () => {
        // arrange
        const initialState = [
            {title: 'A'},
            {title: 'B'}
        ];

        const newCourse = {title: 'C'};

        const action = actions.createCourseSuccess(newCourse);

        // act
        const newState = courseReducer(initialState, action);

        // assert
        expect(newState.length).toEqual(3);
        expect(newState).toEqual([...initialState, newCourse]);
    });
});