import React from 'react';

import Option from './Option/Option';
import classes from './Options.module.css';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Options = props => { 
    return props.options.map((option,index) => {
        return (
            <Grid item key={index} xs={12} md={6}>
                <Button variant='outlined' data-tag={option.num} onClick={props.clicked} className={classes.Option}>
                    {option.value}
                </Button>
            </Grid>
        )}
            
            

            // <div className={classes.radioContainer}>
            //                      <label>
            //         <input
            //                 type='radio' 
            //                 id={option.num}
            //                 value={option.value} 
            //                 data-tag={option.num} 
            //                 key={key}
            //                 name={props.ques}
            //                 onChange={props.clicked}
            //         />
            //     </label> 
            // </div>
        
        // <Option 
        //             value={option.value} 
        //             optnum={option.num}
        //             // data-answer={option.answer} 
        //             key={index} 
        //             clicked={props.scoreClicked} 
        //             quesAns={props.quesAnsed} 
        //             quesClick={props.quesClicked}
        //     />
)};

export default Options;

