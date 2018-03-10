import React, {PropTypes} from 'react';
import TextInput from './../common/TextInput';

const AuthorForm = ({ author, onSave, onChange, errors }) => {
    return (
        <div>
            <h1>Manage Author</h1>

            <br />
            <TextInput onChange={onChange} label="First Name" name="firstName" error={errors.firstName} />

            <br />
            <TextInput onChange={onChange} label="Last Name" name="lastName" error={errors.lastName} />

            <br />
            <input type="submit" className="btn btn-primary" onClick={onSave}/>
        </div>
    );
};

AuthorForm.propTypes = {
    author: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

export default AuthorForm;