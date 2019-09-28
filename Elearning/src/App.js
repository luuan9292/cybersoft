import React from 'react';
import { connect } from "react-redux"
import Modal from './components/Modal';
import CourseList from './components/CourseList';
import axios from "axios";
import { getCourses } from './actions/coursesAction';

class App extends React.Component {
    componentDidMount() {
        axios.get("http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
            .then(res => {
                this.props.getCourses(res.data);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">

                <h1 className="text-center my-5">Quan Ly Khoa Hoc</h1>

                <Modal />

                <CourseList />

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCourses: data => {
            dispatch(getCourses(data));
        }
    }
}

export default connect(null, mapDispatchToProps)(App);

//callback: ham truyen vao 1 ham khac nhu la tham so, doi ham ngoai chay xong roi thi moi chay ham callback
//promise: de kiem soat code tot hon bang cac .then

// chia lam 2 luong bat dong bo
// promise {
//     .then
//     .then
// }
// console.log

//async await: giai quyet bat dong bo,chinh lai thanh 1 luong

//async cho await xong roi moi chay
// async() = {
//     await console.log
// }