import React from 'react';

import classes from './CheckoutSummary.module.css';

const CheckoutSummary = props => {
    console.log(props)
    return (
        <div key={props.index} className={classes.QuesBlock}>
             Q{props.index+1}: You answered: <span className={props.option.optNum === 0 ? classes.Correct : classes.Wrong  }>{props.option.optValue}</span> Correct Answer: <span className={classes.Correct}>{props.option.ans}</span>
        </div>
    )
}

export default CheckoutSummary;