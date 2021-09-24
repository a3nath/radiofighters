import React from 'react';

const CheckoutSummary = props => {
    console.log(props)
    return (
        <div key={props.index}>
             Q{props.index+1}: You answered: <span>{props.option.optValue}</span> Correct Answer: <span>{props.option.ans}</span>
        </div>
    )
}

export default CheckoutSummary;