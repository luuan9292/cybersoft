import React, { Component } from 'react';
import SmartPhoneItem from '../SmartPhoneItem'

export default class SmartPhoneList extends Component {
    render() {
        return (
            <section id="smartphone" className="container-fluid pt-5 pb-5">
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    
                    <SmartPhoneItem />
                    <SmartPhoneItem />
                    <SmartPhoneItem />
                    <SmartPhoneItem />

                </div>
            </section>

        )
    }
}
