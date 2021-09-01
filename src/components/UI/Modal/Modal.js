import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';


import classes from './Modal.module.css';

const Modal = props => {
    return (
        <React.Fragment>
            <Backdrop Backdropshop={props.modalShow} BackdropClicked={props.modalClose} />
            <div className={classes.modal}
                style={{ 
                    transform: props.modalShow ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.modalShow ? '1' : '0'
                }}
            >
                <h1>Thank you for playing!</h1>
                <p>You scored {props.score}</p>
                <Button>Play Again?</Button>
            </div>
        </React.Fragment>
    )
}

export default Modal;