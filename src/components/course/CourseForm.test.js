import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm.js';

function setup() {
    const props = {
        course: {},
        saving: false,
        loading: false,
        errors: {},
        onSave: () => {},
        onChange: () => {},
        allAuthors: []
    };

    const renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm {...props} />);
    const output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    };
}

describe('CourseForm via ReactTestUtils', () => {
    it('renders form and h1', () => {
        const { output } = setup();
        expect(output.type).toBe('form');
    });
});

describe('CourseForm enzyme tests', () => {

});