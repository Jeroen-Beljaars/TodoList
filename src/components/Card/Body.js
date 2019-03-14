import React from 'react'
import '../../styles/Card.css'
import { MdSearch } from 'react-icons/md'

const trimDescription = (description) => {
    if (description.length > 300) return description.slice(0, 300) + "..."
    else return description
}

const Body = props => <div className="card-body" onClick={props.viewTodo}>
    <div className="middle"><MdSearch size="3rem"/></div>
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{trimDescription(props.description)}</p>
</div>

export default Body