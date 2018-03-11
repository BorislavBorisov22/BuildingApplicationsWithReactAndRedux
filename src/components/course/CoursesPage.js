import React, {PropTypes} from 'react';
import { connect } from "react-redux";
import * as courseActions from "../../actions/courseActions";
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    redirectToAddCoursePage(event) {
        event.preventDefault();
        browserHistory.push('/course');
    }

    deleteCourse(courseId) {
        this.props.actions.deleteCourse(courseId);
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <input 
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}
                />
                <CourseList deleteCourse={this.deleteCourse} courses={this.props.courses} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);