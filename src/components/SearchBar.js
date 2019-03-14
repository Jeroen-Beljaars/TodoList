import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body row no-gutters align-items-center">
                    <div className="col-auto">
                        <FaSearch size="30px"/>
                    </div>
                    <div className="col">
                        <input className="form-control form-control-lg form-control-borderless"
                               type="search" placeholder="Search for a specific todo" onChange={this.props.fn}/>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-lg btn-success" type="submit">Search</button>
                    </div>
                </div>
            </div>
        )
    }
}