import React, {PropTypes} from 'react';
import TextInput from './../common/TextInput';

const AuthorForm = ({ author, onSave, onChange, errors, saving }) => {
    return (
        <div>
            <h1>Manage Author</h1>

            <br />
            <TextInput onChange={onChange} label="First Name" value={author.firstName} name="firstName" error={errors.firstName} />

            <br />
            <TextInput onChange={onChange} label="Last Name" value={author.lastName} name="lastName" error={errors.lastName} />

            <br />
            <input disabled={saving} type="submit" className="btn btn-primary" onClick={onSave} value={saving ? 'Saving...' : 'Save'}/>
        </div>
    );
};

AuthorForm.propTypes = {
    author: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    saving: PropTypes.bool.isRequired
};

export default AuthorForm;