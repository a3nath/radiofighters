import React from 'react';

const input = props => {
    return(
    <div>
        <label>Enter artist Name</label>
        <input
            type={props.inputtype}
            placeholder={props.placeholder}
            value={props.placeholder}
            onChange={props.changed}
            value={props.value}
    />
    </div>
   
    )
}

export default input;