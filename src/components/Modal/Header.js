import React from 'react'

const Header = ({ title, handleClose }) => (
    <div className="modal-header">
        <h5 className="modal-title">{ title }</h5>
        <button type="button" className="close" aria-label="Close" onClick={handleClose}>
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
)

export default Header