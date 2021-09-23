import React from 'react';

import classes from './Input.module.css'

const input = props => {
    return(
        <input
            type={props.inputtype}
            placeholder={props.placeholder}
            value={props.placeholder}
            onChange={props.changed}
            value={props.value}
            className = {classes.Input}
    />
    )
}

export default input;