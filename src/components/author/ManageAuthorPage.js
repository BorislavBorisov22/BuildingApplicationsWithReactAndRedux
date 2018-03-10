import React, {PropTypes} from 'react';
import AuthorForm from './AuthorForm';

class ManageAuthorPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.saveAuthor = this.saveAuthor.bind(this);
        this.updateAuthorState = this.updateAuthorState.bind(this);
    }

    saveAuthor() {

    }

    updateAuthorState(event) {
    }

    render() {
        return (
            <AuthorForm author={this.props.author} onSave={this.saveAuthor} onChange={this.updateAuthorState}/>
        );
    }
}

ManageAuthorPage.propTypes = {
    author: PropTypes.object.isRequired
}

export default ManageAuthorPage;