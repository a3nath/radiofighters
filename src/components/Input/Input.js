import React from 'react';

const input = props => {
    return(
    <div>
        <label>Enter artist Name</label>
        <input
        type={props.inputType}
        placeholder={props.placeholder}
        value={props.placeholder}
        onChange={props.changed}
        value={props.value}
        {...props}
    />
    </div>
   
    )
}

export default input;