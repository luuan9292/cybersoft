import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            search: ''
        }
    }

    handleSearch = e => {
        
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Ten Sinh Vien" />
                <div className="input-group-append">
                    <span name="search" onClick={this.handleSearch} className="input-group-text">Search</span>
                </div>
            </div>
        )
    }
}
