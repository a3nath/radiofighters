import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';

import classes from './Trivia.module.css'
import Options from '../Options/Options';
import Spinner from '../UI/Spinner/Spinner';
import { Link } from 'react-router-dom';
import {Question1, Question2, Question3} from '../Questions/Question';
import {PrevButton, NextButton} from '../Questions/Buttons/Buttons';

const Trivia = props => {

 
    const triviaHandler = event => {
        event.preventDefault();
        // console.log('props.modalShow')
        // console.log(props.modalShow)
        // props.modalShow()      
    }
    
    let currentStep = props.currStep;
    let previousButton = null;
    let nextButton = null;
  
    // if(currentStep !==1) {
    //     previousButton =
    //         <PrevButton 
    //             className="btn btn-secondary" 
    //             type="button" clicked={props.prevBtn}>
    //             Previous 
    //         </PrevButton>

    // }
 
    if(currentStep !==3) {
        nextButton =
            // <NextButton 
            //     className="btn btn-secondary" 
            //     type="button" clicked={props.nextBtn}>
            //     Next 
            // </NextButton>
            <Button variant='contained' onClick={props.nextBtn} className={classes.Button}>Next</Button>
    }


    return (
        <div className={classes.Trivia}>
            <img className={classes.artImg} src={props.img}/>
            <form onSubmit={triviaHandler}>
                <Question1 quesArr1={[props.trivArr[0]]} step={props.currStep} radioClick={props.radioClick1}/>
                <Question2 quesArr2={[props.trivArr[1]]} step={props.currStep} radioClick={props.radioClick2}/>
                <Question3 quesArr3={[props.trivArr[2]]} step={props.currStep} radioClick={props.radioClick3}/>
                {/* {previousButton} */}
                {nextButton}
            </form>
           {/* <button disab={!(props.q1 && props.q2 && props.q3)} onClick={props.modalShow}>Submit Answer</button> */}
        </div>
    )

}

export default connect(null)(Trivia);