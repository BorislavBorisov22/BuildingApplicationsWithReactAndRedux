import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authorActions from '../../actions/authorActions';
import * as ajaxActions from '../../actions/ajaxStatusActions';
import AuthorsList from './AuthorsList';
import toastr from 'toastr';

class AuthorsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.deleteAuthor = this.deleteAuthor.bind(this);
    }

    deleteAuthor(authorId) {
        this.props.actions
            .deleteAuthor(authorId)
            .catch(err => {
                toastr.error(err);
            });
    }

    render() {
        return (
            <div>
                <AuthorsList deleteAuthor={this.deleteAuthor} authors={this.props.authors}/>
            </div>
        );
    }
}

AuthorsPage.propTypes = {
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        authors: Object.assign([], state.authors)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, authorActions, ajaxActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);