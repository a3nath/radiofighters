import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actionCreators/scoreActions';
import classes from './Options.module.css'

const Option = props => {

    const [correct, setCorrect] = useState('')

    function optionHandler(event) {
        if (event.target.dataset.answer === 'true'){
            setCorrect('right')
            props.clicked()
        }
        else setCorrect('wrong')

    }

   return <button onClick={optionHandler} {...props} className={correct === 'right' ? classes.right: correct === 'wrong' ?  classes.wrong : classes.blank}>{props.value}</button>
}

const mapDispatchToProps = dispatch => {
    return {
            }
}

export default connect(null, mapDispatchToProps)(Option);