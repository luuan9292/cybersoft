import React, { Component } from 'react';
import Slide1 from "../../img/slide_1.jpg";
import Slide2 from "../../img/slide_2.jpg";
import Slide3 from "../../img/slide_3.jpg";

//lien quan den serviceWorker, de co the luu cache

export default class index extends Component {
    render() {
        return (
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Slide1} alt="Los Angeles" width="100%" height="700" />
                    </div>
                    <div className="carousel-item">
                        <img src={Slide2} alt="Chicago" width="100%" height="700" />
                    </div>
                    <div className="carousel-item">
                        <img src={Slide3} alt="New York" width="100%" height="700" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
            </div>
        )
    }
}
