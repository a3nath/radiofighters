import React from 'react';

import Option from './Option/Option';
import classes from './Options.module.css';

import Button from '../UI/Button/Button';




const Options = props => { 

    return props.options.map((option,index) => {
        return  (
            <div className={classes.radioContainer}>
                <label>
                    <input
                            type='radio' 
                            id={option.num}
                            value={option.value} 
                            data-tag={option.num} 
                            key={index}
                            name={props.ques}
                            onChange={props.clicked}
                    />
                    {option.value}
                </label>
                <Button clicked={}>Next</Button>
            </div>
        )
        
        // <Option 
        //             value={option.value} 
        //             optnum={option.num}
        //             // data-answer={option.answer} 
        //             key={index} 
        //             clicked={props.scoreClicked} 
        //             quesAns={props.quesAnsed} 
        //             quesClick={props.quesClicked}
        //     />
    })
}

export default Options;

