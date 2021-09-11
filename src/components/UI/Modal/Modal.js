import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

const Modal = props => {
    console.log('at modal')
    return (
        <React.Fragment>
            <Backdrop Backdropshow={props.modalOpen} BackdropClicked={props.modalClose} />
            <div className={classes.modal}
                style={{ 
                    transform: props.modalOpen ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.modalOpen ? '1' : '0'
                }}
            >
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default React.memo(Modal, 
    (prevProps, nextProps) => 
        nextProps.modalOpen === prevProps.modalOpen && 
        nextProps.children === prevProps.children
);