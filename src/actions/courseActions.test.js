import expect from 'expect';
import * as courseActions from './courseActions';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import { BEGIN_AJAX_CALL, LOAD_COURSES_SUCCESS } from './actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        const expectedActions = [
            {type: BEGIN_AJAX_CALL},
            {type: LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clear-code', title: 'Clean code'}]}}
        ];

        const store = mockStore({courses: []}, expectedActions);
        store.dispatch(courseActions.loadCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(LOAD_COURSES_SUCCESS);
        }).then(done, done);
    });
});