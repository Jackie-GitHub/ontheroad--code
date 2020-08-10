import React from 'react';
import './Modal.scss';
import Backdrop from './Backdrop';

const Modal = (props) => {
    return(
        <div>
            <div onClick={props.onclick} >
                <Backdrop show={props.onSearch} />
            </div>
            <div className="otr-modal" style={{transform:props.onSearch ? 'translateY(0)':'translateY(-100vh)',opacity:props.onSearch ? '1':'0'}}>
                {props.children}
            </div>
        </div>
    )
};

export default Modal;