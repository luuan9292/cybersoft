import React, { Component } from 'react'
import { connect } from "react-redux";

import {deleteCourse, showSelectedCourse} from "../../actions/coursesAction";


class CourseItem extends Component {

    handleDelete = (courseId) => {
        this.props.deleteCourse(courseId);
    }

    showSelectedCourse = () => {
        this.props.showSelectedCourse(this.props.course)
    }

    render() {

        let {course, index} = this.props;

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{course.nameCourse}</td>
                <td>{course.descriptionCourse}</td>
                <td>
                    <button className="btn btn-warning" 
                    data-toggle="modal" data-target="#myModal"
                    onClick={this.showSelectedCourse} >Sua</button>
                    <button className="btn btn-danger" onClick={() => this.handleDelete(course.id)}>Xoa</button>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCourse: courseId => {
            dispatch(deleteCourse(courseId));
        },
        showSelectedCourse: course => {
            dispatch(showSelectedCourse(course))
        }
    }
}

export default connect(null, mapDispatchToProps)(CourseItem);
