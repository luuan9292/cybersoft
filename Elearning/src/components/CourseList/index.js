import React, { Component } from 'react'
import { connect } from "react-redux";
import CourseItem from '../CourseItem';

class CourseList extends Component {
    render() {

        const elmCourse = this.props.courses.map((course, index) => {
            return <CourseItem key={course.id} index={index} course={course} />
        })

        return (
            <>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name Course</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {elmCourse}

                    </tbody>
                </table>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps, null)(CourseList);
