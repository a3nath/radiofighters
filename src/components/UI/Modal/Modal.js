import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';


import classes from './Modal.module.css';

const Modal = props => {

    console.log(props.modalShow)
    return (
        <React.Fragment>
            <Backdrop Backdropshop={props.modalShow} BackdropClicked={props.modalCloseHandler} />
            <div className={classes.modal}
                style={{ 
                    transform: props.modalShow ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.modalShow ? '1' : '0'
                }}
            >
            </div>
        </React.Fragment>
    )
}

export default React.memo(Modal, 
    (prevProps, nextProps) => 
        nextProps.modalShow === prevProps.modalShow && 
        nextProps.children === prevProps.children
);