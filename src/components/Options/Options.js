import React from 'react';

import Option from './Option/Option';

const Options = props => {
    return props.options.map((option,index) => {
        return  <Option 
                    value={option.value} 
                    optnum={option.num}
                    // data-answer={option.answer} 
                    key={index} 
                    clicked={props.scoreClicked} 
                    quesAns={props.quesAnsed} 
                    quesClick={props.quesClicked}
            />
    })
}

export default Options;

