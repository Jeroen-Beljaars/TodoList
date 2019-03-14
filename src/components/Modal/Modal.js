import React from 'react'
import '../../styles/Modal.css'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const Modal = ({ handleClose, handleSave, show, title, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <Header title={title} handleClose={handleClose}/>
                    <Body content={children} />
                    <Footer handleClose={handleClose} handleSave={handleSave}/>
                </div>
            </div>
        </div>
    );
};

export default Modal