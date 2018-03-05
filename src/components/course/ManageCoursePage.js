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

        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onChange(event) {
        const fieldName = event.target.name;
        const value = event.target.value;

        const updatedCourse = this.state.course;
        updatedCourse[fieldName] = value;
        this.setState({
            course: updatedCourse
        });
    }

    onSave() {

    }

    render() {
        return (
            <div>
                <h1>Manage Course Page</h1>
                <CourseForm
                    course={this.state.course}
                    errors={this.state.errors}
                    allAuthors={[]}
                    onChange={this.onChange}
                    onSave={this.onSave}
                     />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    actions: PropTypes.object.isRequired,
    course: PropTypes.object
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

    return {
        course: course
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);