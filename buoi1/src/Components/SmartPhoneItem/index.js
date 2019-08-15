import React, { Component } from 'react';
import sp_iphoneX from '../../img/sp_iphoneX.png';

export default class SmartPhoneItem extends Component {

    state = {
        isShowDesc: false,
    }

    onShowDesc = (number) => { //luc set state lai no se tao ra 1 state moi luon, chu khong cho phep de len state cu, de co the truy xuat state cu duoc
        this.setState({
            isShowDesc: !this.state.isShowDesc
        }, () => {
            console.log(this.state.isShowDesc)
        }) //thuc hien qua trinh setState roi moi thuc hien callback
    }

    // onShowDesc() {
    //     this.setState({
    //         isShowDesc: true
    //     })
    //doi voi function binh thuong, this nay la cua function, ma this phai cua Component moi duoc
    //arrow khong lam thay doi con tro this, nen this cua no chinh la cua Component, du co long bao nhieu arrow nua thi van la this cua component
    //function binh thuong thi this cua function, ngu canh cua this la ham gan no nhat
    // }

    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                <div className="container">
                    <div className="card bg-light" style={{ width: '300px' }}>
                        <img className="card-img-top" src={sp_iphoneX} alt="Card" style={{ maxWidth: '100%', height: '250px' }} />
                        <div className="card-body text-center">
                            <h4 className="card-title text-center">iPhone X</h4>
                            {
                                this.state.isShowDesc ?
                                    <p className="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p>
                                    :
                                    ""
                            }
                            <a href="#1" className="btn btn-primary" onClick={() => { this.onShowDesc(10) } /*dang dinh nghia ham*/} >Detail</a>
                            <a href="#1" className="btn btn-danger">Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
