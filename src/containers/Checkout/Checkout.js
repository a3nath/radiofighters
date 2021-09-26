import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Modal from '../../components/UI/Modal/Modal';
import * as modalActions from '../../store/actionCreators/modalActions';
import CheckoutSummary from './CheckoutSummary.js/CheckoutSummary';
import classes from './Checkout.module.css'



const Checkout = props => {
    
    const q1Opt = props.q1Opt;
    const q2Opt = props.q2Opt;
    const q3Opt = props.q3Opt;
    const optArr = [q1Opt, q2Opt, q3Opt];
    const scoreArr = [q1Opt.optNum, q2Opt.optNum, q3Opt.optNum]   
    const finalScore = scoreArr.filter(opt => opt === 0).length
    
    const playAgain = () => {
        props.history.goBack()
    }

    const goHome = () => {
        props.history.replace('/')
    }

    const [modal, setModal] = useState(false);

    const modalShowHandler = () => {
        console.log('modal show triggered')
        setModal(true);
    }
    const modalCloseHandler = () => {
        setModal(false);
    }

    let summary = optArr.map((opt,index) => {
        return (
                <CheckoutSummary index={index} option={opt}/>
        )
    })


    let checkout =
        <div className={classes.checkoutBlock}>
            <h1>Thank you for Playing!</h1>
            <p>You answered {finalScore} questions correctly  </p>
            <div className={classes.QuesBlock}>
                {summary}
            </div>
            <Button variant='contained' onClick={playAgain} className={classes.Button}>Play Again</Button>
            <Link to ={'/home'}>
                <Button variant='contained' onClick={goHome} className={classes.Button}>Home</Button>
            </Link>
        </div>

    return (
        <div className={classes.Checkout}>
            {checkout}
        </div>  
    )

}

const mapStateToProps = state => {
    return {
        q1Opt: state.questionReducer.ques1Opt,
        q2Opt: state.questionReducer.ques2Opt,
        q3Opt: state.questionReducer.ques3Opt,
        modal: state.modalReducer.modal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        modalShow: () => dispatch(modalActions.modalShow()),
        modalClose: () => dispatch(modalActions.modalClose())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
