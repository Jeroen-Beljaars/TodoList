import React, { Component } from 'react'

export default class HeaderImage extends Component {
    render() {
        if (this.props.image === null){
            return null
        }
        else {
            return <img src={this.props.image} alt="Card image cap" className="card-img-top" />

        }
    }
}