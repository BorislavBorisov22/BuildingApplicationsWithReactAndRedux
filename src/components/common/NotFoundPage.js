import React from 'react';
import { Link } from 'react-router';

class NotFoundPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <h1>Oops! The page you were looking for is not present.</h1>
                <Link to="/" className="btn btn-default">Go Back Home</Link>
            </div>
        );
    }
}

export default NotFoundPage;