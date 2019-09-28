import React, { Component } from 'react';
import _ from "lodash"; //no export default dau _

export default class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maSinhVien : "",
            tenSinhVien : "",
            email : "",
            student : {}
        };
    }

    // componentWillReceiveProps(nextProps, prevState) {
    //     //Nhiem vu cua life cycle nay la chuyen props thanh state
    //     this.setState({
    //         maSinhVien : nextProps.student.maSinhVien,
    //         tenSinhVien : nextProps.student.tenSinhVien,
    //         email : nextProps.student.email
    //     })
    // }

    static getDerivedStateFromProps(nextProps, prevState) {
        //khong thuoc ve class nay nen ko co thu khoa this
        //se duoc goi moi lan co update
        //return nay ngang bang this.setState
        if(nextProps.student !== prevState.student) { //Chi khi props student thay doi co nghia la nextProps khac prevState thi moi chay
            return {
                maSinhVien : nextProps.student.maSinhVien,
                tenSinhVien : nextProps.student.tenSinhVien,
                email : nextProps.student.email,
                student: nextProps.student  //Khong co cai nay thi se bi rong nen phai gan de lan sau co giong nhua thi khong chay nua
            }
        }
        return null;
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onAdd = () => {
        this.props.addMember(this.state);
        this.clearForm();
    }

    onUpdate = () => {
        const student = {
            maSinhVien: this.state.maSinhVien,
            tenSinhVien : this.state.tenSinhVien,
            email : this.state.email
        }
        this.props.changeStudent(student);
    }

    clearForm = () => {
        this.setState({
            maSinhVien : "",
            tenSinhVien : "",
            email : ""
        })
    }

    render() {
        let { maSinhVien, tenSinhVien, email} = this.state
        return (
            <div className="mb-3">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" 
                        onClick={() => this.props.setStudent(this.clearForm)} // vi setState la bat dong bo nen phai truyen clearForm vao roi chay tham so thu 2 cua setState o home moi thuc hien duoc. neu ko lam nhu vay thi thang setState no chua chay xong thi thang clearForm da chya roi
                    >
                    Them Sinh Vien
                    </button>
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Them Sinh VIen</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>

                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="maSinhVien">Ma Sinh Vien : </label>
                                    <input name="maSinhVien" value={maSinhVien} onChange={this.onChange} type="text" className="form-control" id="maSinhVien" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="tenSinhVien">Ho Ten SInh Vien : </label>
                                    <input name="tenSinhVien" value={tenSinhVien} onChange={this.onChange} type="text" className="form-control" id="tenSinhVien" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email : </label>
                                    <input name="email" value={email} onChange={this.onChange} type="text" className="form-control" id="email" />
                                </div>
                            </div>

                            <div className="modal-footer">
                                {
                                    !_.isEmpty(this.state.student) ? //kiem tra no co rong hay khong
                                    <button onClick={this.onUpdate} type="button" className="btn btn-warning" data-dismiss="modal">Cap Nhat</button>:
                                    <button onClick={this.onAdd} type="button" className="btn btn-primary" data-dismiss="modal">Them</button>
                                }
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
