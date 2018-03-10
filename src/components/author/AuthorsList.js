import React, {PropTypes} from 'react';
import AuthorListRow from './AuthorListRow';

const AuthorsList = ({ authors, deleteAuthor }) => {
    return (
    <table className="table">
        <thead>
            <tr>
                <th></th>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
        </thead>
        <tbody>
            {
                authors.map(author => <AuthorListRow deleteAuthor={deleteAuthor} key={author.id} author={author}/>)
            }
        </tbody>
    </table>
    );
};

AuthorsList.propTypes = {
    authors: PropTypes.array.isRequired,
    deleteAuthor: PropTypes.func.isRequired
};

export default AuthorsList;
