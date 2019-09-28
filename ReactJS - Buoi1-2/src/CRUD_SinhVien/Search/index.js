import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            keyword: ''
        }
    }

    onChange = e => {
        console.log(e.keyCode)
        this.setState({
            [e.target.name] : e.target.value
        }, () => {
            this.onSearch();
        })
    }

    onKeyUp = e => {
        if(e.keyCode === 13) {
            this.onSearch();
        }
    }

    onSearch = () => {
        // if(!this.state.keyword) return; //neu chuoi rong thi return
        this.props.searchStudent(this.state.keyword);
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input name="keyword" onChange={this.onChange} onKeyUp={this.onKeyUp} value={this.state.keyword} type="text" className="form-control" placeholder="Ten Sinh Vien" />
                <div className="input-group-append">
                    <span  className="input-group-text" onClick={this.onSearch}>Search</span>
                </div>
            </div>
        )
    }
}
