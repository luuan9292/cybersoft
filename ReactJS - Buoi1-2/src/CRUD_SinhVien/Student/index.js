import React, { Component } from 'react'

export default class Student extends Component {

    onDelete = () => {
        this.props.deleteStudent(); //Ban chat la thang StudentList da co ma sinh vien roi nen truyen thang luc map luon, o day chi vien goi ham ra
    }

    render() {
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{this.props.student.maSinhVien}</td>
                <td>{this.props.student.tenSinhVien}</td>
                <td>{this.props.student.email}</td>
                <td>
                    <button className="btn btn-warning" 
                        onClick={this.props.updateStudent}
                        data-toggle="modal" data-target="#myModal"
                    >Sua</button>
                    <button className="btn btn-danger" onClick={this.onDelete}>Xoa</button>
                </td>
            </tr>
        )
    }
}
