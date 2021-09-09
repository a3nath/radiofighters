import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';


import classes from './Modal.module.css';

const Modal = props => {

    const q1Opt = props.ques1Opt;
    const q2Opt = props.ques2Opt;

    console.log('modal')
    console.log(q1Opt)
    console.log(q2Opt)



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
                <h1>Thank you for playing!</h1>
                <p>You scored </p>
                <Button clicked={props.modalCloseHandler}>Play Again?</Button>
            </div>
        </React.Fragment>
    )
}

export default React.memo(Modal, 
    (prevProps, nextProps) => 
        nextProps.modalShow === prevProps.modalShow && 
        nextProps.children === prevProps.children
);