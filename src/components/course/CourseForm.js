import React, {PropTypes} from 'react';
import TextInput from '../common/textInput';

const CourseForm =  ({course, allAuthors, onSave, onChange, loading, error}) => {

};

CourseForm.propTypes = {
    course: PropTypes.object.IsRequired,
    allAuthors: PropTypes.array,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.object
};

export default CourseForm;