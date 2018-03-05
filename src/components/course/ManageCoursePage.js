import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    updateCourseState(event) {
        const fieldName = event.target.name;
        const value = event.target.value;

        const updatedCourse = this.state.course;
        updatedCourse[fieldName] = value;
        this.setState({
            course: updatedCourse
        });
    }

    saveCourse() {
        // console.log(this.state.course, 'course to save');
    }

    render() {
        return (
            <div>
                <CourseForm
                    course={this.state.course}
                    errors={this.state.errors}
                    allAuthors={this.props.authors}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
                     />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    actions: PropTypes.object.isRequired,
    course: PropTypes.object,
    authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    const course = {
        id: '',
        watchHref:'',
        title: '',
        authorId: '',
        length: '',
        category: ''
    };

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: `${author.firstName} ${author.lastName}`
        };
    });

    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);