import React from 'react';
import classes from './Button.module.css'

const Button = props => {
return <button disabled={props.disab} className= {classes.Button} onClick={props.clicked} type={props.type}>{props.children}</button>
}

export default Button;