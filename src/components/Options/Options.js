import React from 'react';

import Option from './Option/Option';

const Options = props => {
    return props.options.map((option,index) => {
        return  (
            <div>
                <input
                        type='radio' 
                        id={option.num}
                        value={option.value} 
                        data-tag={option.num} 
                        key={index}
                />
                <label>{option.value}</label>
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

