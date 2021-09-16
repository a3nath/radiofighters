import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import * as modalActions from '../../store/actionCreators/modalActions';


const Checkout = props => {
    console.log(props.q1Opt)
    console.log(props.q2Opt)
    const scoreArr = [props.q1Opt, props.q2Opt, props.q3Opt]   
    const finalScore = scoreArr.filter(opt => opt === 0).length * 10
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

    console.log(props.q1Opt)
    console.log(props.q2Opt)
    console.log(scoreArr)
    console.log(finalScore)
    let modalSummary = 
        <React.Fragment>
            <h1>Thank you for Playing!</h1>
            <p>Your Final Score is</p>
            <p>  {finalScore}</p> 
            <Button clicked={playAgain}>Play Again</Button>
            <Link to ={'/home'}>
                <Button clicked={goHome}></Button>
            </Link>
        </React.Fragment>

    return (
        // <Modal
        //     modalOpen={modal}
        //     modalClose={modalCloseHandler}
        // >
        <div>
            {modalSummary}
        </div>  
        // </Modal>
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
