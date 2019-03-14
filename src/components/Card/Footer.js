import React from 'react'
import TimeAgo from './TimeAgo'
import {MdCheck, MdClose, MdDelete } from "react-icons/md";
import '../../styles/Card.css'

const fetchIcon = (completed, fn) => {
    if(completed) return <div onClick={fn} className="col-1 delete"><MdClose size="2rem"/></div>
    else return <div onClick={fn} className="col-1 finish-icon">< MdCheck size="2rem"/></div>
}

const Footer = props => <div className="card-footer">
    <div className="row">
        <small className="col-9 text-muted my-auto">Last updated <TimeAgo startTime={props.date}/> ago</small>
        <div className="delete" onClick={props.delete}><MdDelete size="2rem"/></div>
        {fetchIcon(props.completed, props.fn)}
    </div>
</div>

export default Footer