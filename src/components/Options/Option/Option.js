import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../../store/actionCreators/scoreActions';
import classes from './Option.module.css'

const Option = props => {

    const [correct, setCorrect] = useState('')

    function optionHandler(event) {
        if (event.target.dataset.answer === 'true'){
            //styling green
            setCorrect('right')
            //increment score
            props.clicked()
            //disables other button
        }
        else setCorrect('wrong')

    }

   return <button onClick={optionHandler} {...props} className={correct === 'right' ? classes.right: correct === 'wrong' ?  classes.wrong : classes.blank}>{props.value}</button>
}


export default Option;