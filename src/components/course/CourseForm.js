import React, {PropTypes} from 'react';
import TextInput from './../common/TextInput';
import SelectInput from './../common/SelectInput';

const CourseForm =  ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput 
                name="title"
                label="title"
                value={course.title}
                onChange={onChange}
                error={errors.title}
            />

            <br />
            <SelectInput 
                name="authorId"
                label="authorId"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId}
            />

             <TextInput 
                name="category"
                label="category"
                value={course.category}
                onChange={onChange}
                error={errors.category}
            />

            <br />

             <TextInput 
                name="length"
                label="lenght"
                value={course.length}
                onChange={onChange}
                error={errors.title}
            />

            <br />

            <input onClick={onSave} type="button" className="btn btn-primary"  value="Save"/>
        </form>
    );
};

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object
};

export default CourseForm;