import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import * as unsavedCourseAction from '../../actions/unsavedCourseChangesActions';
import { bindActionCreators } from 'redux';
import CourseForm from './CourseForm';
import toastr from 'toastr';
import { authorsFormattedForDropdown } from './../../selectors/selectors';
import { Router } from 'react-router';

export class ManageCoursePage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            saving: false,
            dirty: false
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({
                course: Object.assign({}, nextProps.coure)
            });
        }
    }

    componentWillUnmount() {
        if (this.state.dirty) {
            this.props.actions.storeUnsavedChanges(this.state.course);
            toastr.warning('Current changes are kept if you want to continue your work later :)');
        }
    }

    updateCourseState(event) {
        const fieldName = event.target.name;
        const value = event.target.value;

        const updatedCourse = this.state.course;
        updatedCourse[fieldName] = value;
        this.setState({
            course: updatedCourse,
            dirty: true
        });
    }

    courseFormIsValid() {
        const errors = {};
        let isFormValid = true;

        if (this.state.course.title < 5) {
            errors.title = 'Title must be at least 5 characters.';
            isFormValid = false;
        }

        this.setState({
            errors
        });
        return isFormValid;
    }

    saveCourse(event) {
        event.preventDefault();

        if (!this.courseFormIsValid()) {
            return;
        }

        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course)
            .then(() => {
                this.setState({
                    dirty: false
                });
                this.redirect();
            })
            .catch(error => {
                toastr.error(error);
                this.setState({saving: false});
            });
    }

    redirect() {
        this.setState({saving:false});
        toastr.success('Course added successfully');
        this.context.router.push('/courses');
    }

    render() {
        return (
            <div>
                <CourseForm
                    saving={this.state.saving}
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

ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function getCourseById(courses, courseId) {
    return courses.find(c => c.id === courseId) || null;
}

function getDefaultCourse() {
    return {
        id: '',
        watchHref:'',
        title: '',
        authorId: '',
        length: '',
        category: ''
    };
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id;

    const course = courseId ? getCourseById(state.courses, courseId) : state.unsavedCourse;

    return {
        course: course,
        authors: authorsFormattedForDropdown(state.authors)
    };
}

function mapDispatchToProps(dispatch) {
    const mappedDispatchProps = {
        actions: bindActionCreators(Object.assign({}, courseActions, unsavedCourseAction), dispatch)
    };

    return mappedDispatchProps;
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);