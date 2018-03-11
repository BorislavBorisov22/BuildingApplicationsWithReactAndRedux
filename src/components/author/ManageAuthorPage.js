import React, {PropTypes} from 'react';
import AuthorForm from './AuthorForm';
import { bindActionCreators } from 'redux';
import * as authorActions from '../../actions/authorActions';
import * as ajaxActions from '../../actions/ajaxStatusActions';
import { connect } from 'react-redux';

class ManageAuthorPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            errors: {},
            author: props.author
        };

        this.saveAuthor = this.saveAuthor.bind(this);
        this.updateAuthorState = this.updateAuthorState.bind(this);
    }

    isFormValid() {
        const errors = {};
        let isValid = true;

        if (this.state.author.firstName.length < 4) {
            errors.firstName = 'First name must be at least 4 characters!';
            isValid = false;
        }

        if (this.state.author.lastName.length < 4) {
            errors.lastName = 'Last Name must be at least 4 characters!';
            isValid = false;
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    saveAuthor() {
        if (!this.isFormValid()) {
            return;
        }
    }

    updateAuthorState(event) {
        const value = event.target.value;
        const fieldName = event.target.name;

        const updatedAuthor = this.state.author;
        updatedAuthor[fieldName] = value;
        this.setState({
            author: updatedAuthor
        });
    }

    render() {
        return (
            <AuthorForm 
                author={this.props.author}
                onSave={this.saveAuthor}
                onChange={this.updateAuthorState}
                errors={this.state.errors}
            />
        );
    }
}

ManageAuthorPage.propTypes = {
    author: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        author: {
            firstName: '',
            lastName: ''
        }
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, authorActions, ajaxActions), dispatch)
    };
}

export default connect(mapDispatchToProps, mapStateToProps)(ManageAuthorPage);