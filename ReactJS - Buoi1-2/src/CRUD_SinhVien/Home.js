import React, { Component } from 'react';
import Modal from './Modal';
import Search from './Search';
import StudentList from './StudenList';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
            student: {},
            searchStudentList: [],
            keyword: ''
        };
    }

    addStudent = (student) => {
        let studentList = [...this.state.studentList, student] //Khong duoc phep thay doi state nen phai tao ra 1 mang moi, State trong react moi lan se tao moi khac nhau de con su dung cac state cu
        this.setState({
            studentList
        })
    }

    deleteStudent = (maSinhVien) => {
        let studentList = this.state.studentList.filter(student => student.maSinhVien !== maSinhVien)
        this.setState({
            studentList
        })
    }

    updateStudent = student => {
        this.setState({
            student
        })
    }

    setStudent = (callback) => { //Phai kich hoat o day chu khong kich hoat o student
        this.setState({
            student:{}
        }, () => {
            callback()
        })
    }

    changeStudent = student => {
        let studentList = [...this.state.studentList];
        const index = this.state.studentList.findIndex(std => std.id === student.id);
        studentList[index] = student;
        this.setState({
            studentList
        })
    }

    searchStudent = keyword => {
        let key = keyword.toLowerCase().replace(/\s/g,''); //remove all space in string
        let studentList = [...this.state.studentList];
        let searchStudentList = studentList.filter(student => {
            return student.tenSinhVien.toLowerCase().replace(/\s/g,'').indexOf(key) !== -1;
        })
        this.setState({
            searchStudentList,
            keyword: key
        })
    }

    render() {
        console.log(this.props.keyword)
        return (
            <div className="container">
                <h1 className="mb-3 text-center">Quan Ly Sinh Vien</h1>
                <Modal addMember={this.addStudent} 
                student={this.state.student}
                setStudent={this.setStudent}
                changeStudent={this.changeStudent}
                />
                <Search searchStudent={this.searchStudent} />
                {
                    this.state.searchStudentList.length === 0 && this.state.keyword ?
                    <div>Khong tim thay ket qua</div>
                    :
                    this.state.searchStudentList.length === 0 && !this.state.keyword ?
                    <StudentList 
                    studentList={this.state.studentList} 
                    deleteStudent={this.deleteStudent} 
                    updateStudent={this.updateStudent}/>
                    :
                    <StudentList 
                    studentList={this.state.searchStudentList} 
                    deleteStudent={this.deleteStudent} 
                    updateStudent={this.updateStudent}/>
                }
                
            </div>
        )
    }
}
