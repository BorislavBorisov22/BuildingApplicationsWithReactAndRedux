import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const AuthorListRow = ({ author, deleteAuthor }) => {
    const deleteAuthorClick = () => {
        deleteAuthor(author.id);
    };

    return (
        <tr>
          <td><a href="#" onClick={deleteAuthorClick}>Delete</a></td>
          <td><Link to={`/course/${author.id}`}>{author.id}</Link></td>
          <td>{author.firstName}</td>
          <td>{author.lastName}</td>
        </tr>
    );
};

AuthorListRow.propTypes = {
    author: PropTypes.object.isRequired,
    deleteAuthor: PropTypes.func.isRequired
};

export default AuthorListRow;
