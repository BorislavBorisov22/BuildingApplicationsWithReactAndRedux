import React, {PropTypes} from 'react';
import AuthorForm from './AuthorForm';
import { bindActionCreators } from 'redux';
import * as authorActions from '../../actions/authorActions';
import * as ajaxActions from '../../actions/ajaxStatusActions';
import { connect } from 'react-redux';
import toastr from 'toastr';


class ManageAuthorPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            errors: {},
            author: props.author,
            saving: false
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

    saveAuthor(event) {
    event.preventDefault();

        if (!this.isFormValid()) {
            return;
        }

        this.setState({
            saving: true
        });

        this.props.actions.saveAuthor(this.state.author)
            .then(() => {
                toastr.success('Author added successfully');
                this.context.router.push('/authors');
            }).catch((err) => {
                toastr.error(err);
                this.setState({
                    saving: false
                });
            });
    }

    updateAuthorState(event) {
        const value = event.target.value;
        const fieldName = event.target.name;

        const authorUpdate = this.state.author;
        authorUpdate[fieldName] = value;
        this.setState({
            author: authorUpdate
        });
    }

    render() {
        return (
            <AuthorForm 
                author={this.props.author}
                onSave={this.saveAuthor}
                onChange={this.updateAuthorState}
                errors={this.state.errors}
                saving={this.state.saving}
            />
        );
    }
}

ManageAuthorPage.propTypes = {
    author: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

ManageAuthorPage.contextTypes = {
    router: PropTypes.object
};

function findAuthorById(authors, authorId) {
    return authors.find(a => a.id === authorId);
}

function defaultAuthor() {
    return {
        firstName: '',
        lastName: ''
    };
}

function mapStateToProps(state, ownProps) {
    const authorId = ownProps.params.id;
    const author = authorId ? findAuthorById(state.authors, authorId) : defaultAuthor();

    return {
        author
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, authorActions, ajaxActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);