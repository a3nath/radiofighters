import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';

import classes from './Trivia.module.css'
import {Question1, Question2, Question3} from '../Questions/Question';

const Trivia = props => {

 
    const triviaHandler = event => {
        event.preventDefault();    
    }
    
    let currentStep = props.currStep;
    let nextButton = null;
  
    if(currentStep !==3) {
        nextButton =
            <Button variant='contained' onClick={props.nextBtn} className={classes.Button}>Next</Button>
    }


    return (
        <div className={classes.Trivia}>
            <img className={classes.artImg} src={props.img} alt='band image'/>
            <form onSubmit={triviaHandler}>
                <Question1 quesArr1={[props.trivArr[0]]} step={props.currStep} radioClick={props.radioClick1}/>
                <Question2 quesArr2={[props.trivArr[1]]} step={props.currStep} radioClick={props.radioClick2}/>
                <Question3 quesArr3={[props.trivArr[2]]} step={props.currStep} radioClick={props.radioClick3}/>
                {nextButton}
            </form>
        </div>
    )

}

export default connect(null)(Trivia);