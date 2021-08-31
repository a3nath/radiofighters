import React from 'react';

import Option from './Option/Option';

const Options = props => {
    return props.options.map((option,index) => {
        return  <Option value={option.value} data-answer={option.answer} key={index} clicked={props.scoreClicked}/>
    })
}

export default Options;

