import React, {PropTypes} from 'react';
import { connect } from "react-redux";
import * as courseActions from "../../actions/courseActions";

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: '' }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course });
    }

    onClickSave() {
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input 
                    placeholder="Course Title"
                    className="form-control"
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
                <br />
                <input className="btn btn-primary"
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}
                />
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(CoursesPage);