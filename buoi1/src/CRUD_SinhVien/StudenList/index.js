import React, { Component } from 'react'
import Student from '../Student';

export default class StudentList extends Component {
    render() {
        
        let elmStudent = this.props.studentList.map((student, index) => {
            return <Student student={student} index={index} key={index} 
            deleteStudent={() => this.props.deleteStudent(student.maSinhVien)}
            updateStudent={() => this.props.updateStudent(student)}
            /> //Moi thang con se khac nhau, de xac dinh DOM ao, roi so sanh voi DOM that, chi render lai nhung phan khac nhau
            //truyen ma sinh vien o day cung duoc thay vi truyen o student, vi ma da co o day luon roi, nen truyen luon xong thang con, roi thang con kich hoat luon cai ham o StudentList, tiep den thang studentlist se kich hoat ham o Home voi tham so
        })

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Ma Sinh Vien</th>
                        <th>Ho Ten</th>
                        <th>Email</th>
                        <th>Thao Tac</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {elmStudent}

                </tbody>
            </table>
        )
    }
}
