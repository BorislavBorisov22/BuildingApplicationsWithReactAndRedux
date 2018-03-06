import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm.js';

function setup(saving = false) {
    const props = {
        course: {},
        saving,
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
        const [ h1 ] = output.props.children;
        expect(output.type).toBe('form');
        expect(h1.type).toBe('h1');
    });

    it('save button is labeled save when not saving', () => {
        const { output } = setup();
        const submitButton = output.props.children[8];
        expect(submitButton.props.value).toBe('Save');
    });

    it('save button is labeled Saving... when saving', () => {
        const { output } = setup(true);
        const submitButton = output.props.children[8];
        expect(submitButton.props.value).toBe('Saving...');
    });
});

describe('CourseForm enzyme tests', () => {

});