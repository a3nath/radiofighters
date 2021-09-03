import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../../store/actionCreators/scoreActions';
import classes from './Option.module.css'

const Option = props => {

    //need state for question
    //clicking on one will disable buttons for that qustion
    //once both question states done show modal

    // const [correct, setCorrect] = useState('')

    function optionHandler(event) {
        if (event.target.dataset.answer === 'true'){
            //styling success green
            // setCorrect('right')
            //increment score
            // props.clicked()
            //update answer state
            //send value click
            props.quesClick([event.target.value])
            console.log(event.target.value)
        }
        else {
            //styling failure red
            // setCorrect('wrong')
            //update answer state
            props.quesClick()
        }
    }

   return   <button 
                onClick={optionHandler} 
                {...props} 
                //if modal shows, submit clicked disable buttons
                disabled={props.modal} 
                // className={correct === 'right' ? classes.right: correct === 'wrong' ?  classes.wrong : classes.blank}
            >
                {props.value}
            </button>
}


export default Option;