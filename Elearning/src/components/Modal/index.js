import React, { Component } from 'react'
import { connect } from "react-redux";

import { addCourse, updateCourse, showSelectedCourse } from "../../actions/coursesAction";
import _ from "lodash";

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            nameCourse: "",
            descriptionCourse: "",
            selectedCourse: {}
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.selectedCourse !== prevState.selectedCourse) {
            return {
                selectedCourse: nextProps.selectedCourse,
                id: nextProps.selectedCourse.id,
                nameCourse: nextProps.selectedCourse.nameCourse,
                descriptionCourse: nextProps.selectedCourse.descriptionCourse
            }
        }
        return null;
    }

    onAdd = () => {
        // _.pick dung de lay ra nhieu thuoc tinh cua object
        const data = _.omit(this.state, ["selectedCourse"]); //loai bo mot thuoc tinh trong object nao do, bo selectedCourse ra ngoai vi no bi thua
        this.props.addCourse(data);
    }

    onUpdate = () => {
        const data = _.omit(this.state, ["selectedCourse"]);
        this.props.updateCourse(data);
    }

    render() {
        return (
            <>
                <button onClick={this.props.showSelectedCourse} type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                    Them Khoa Hoc
                </button>

                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">Them Khoa Hoc</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="id">Id</label>
                                    <input name="id" onChange={this.onChange} value={this.state.id || ""} type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nameCourse">Name Course: </label>
                                    <input name="nameCourse" onChange={this.onChange} value={this.state.nameCourse || ""} type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descriptionCourse">Description Course</label>
                                    {/* dung lodash de ko cho modal bi trong */}
                                    <input value={_.get(this.state, "descriptionCourse", "")} name="descriptionCourse" onChange={this.onChange} type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="modal-footer">
                                {
                                    !_.isEmpty(this.state.selectedCourse) ?
                                        <button type="button" className="btn btn-primary" onClick={this.onUpdate}>Sua</button> :
                                        <button type="button" className="btn btn-primary" onClick={this.onAdd}>Add</button>
                                }

                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedCourse: state.selectedCourse
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCourse: newCourse => {
            dispatch(addCourse(newCourse));
        },
        updateCourse: newCourse => {
            dispatch(updateCourse(newCourse))
        },
        showSelectedCourse: () => {
            dispatch(showSelectedCourse({}))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);