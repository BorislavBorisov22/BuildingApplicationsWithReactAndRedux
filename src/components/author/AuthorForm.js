import React, {PropTypes} from 'react';
import TextInput from './../common/TextInput';

const AuthorForm = ({ author, onSave, onChange, errors }) => {
    return (
        <div>
            <TextInput onChange={onChange} error={errors.firstName} />
            <TextInput onChange={onChange} error={errors.lastName} />
            <input type="submit" onClick={onSave}/>
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