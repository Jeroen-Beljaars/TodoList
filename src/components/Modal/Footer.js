import React from 'react'

const Footer = ({ handleClose, handleSave }) => (
    <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={handleSave}>Save changes</button>
        <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
    </div>

)

export default Footer