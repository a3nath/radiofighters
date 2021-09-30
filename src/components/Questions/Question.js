import React from 'react';
import Options from '../Options/Options'

import ButtonGroup from '@mui/material/ButtonGroup';
import classes from './Question.module.css'
import Grid from '@mui/material/Grid';

export const Question1 = props => {
    if (props.step !== 1) return null
        return props.quesArr1.map((quesOpt, index) => {
            let [ques, opt] = quesOpt;
            let quesNum = ques.num;
            let quesText = ques.text;
            return (
                <div className={classes.questionBox} key={index}>
                    <div className={classes.Question}>
                        {quesText}
                    </div>
                    <ButtonGroup variant='outlined' aria-label='options button group' className={classes.Options}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2}}>
                        <Options 
                            ques={quesNum} 
                            options={opt} 
                            val={props.radio}
                            clicked={props.radioClick}
                        />
                        </Grid>
                    </ButtonGroup >
                </div>
            )
        })
}

  
  
export const Question2 = props => {
    if (props.step !== 2) return null
        return props.quesArr2.map((quesOpt, index) => {
            let [ques, opt] = quesOpt;
            let quesNum = ques.num;
            let quesText = ques.text;
            return (
                <div className={classes.questionBox} key={index}>
                    <div className={classes.Question}>
                        {quesText}
                    </div>
                    <ButtonGroup variant='outlined' aria-label='options button group' className={classes.Options}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2}}>
                        <Options 
                            ques={quesNum} 
                            options={opt} 
                            clicked={props.radioClick}
                        />
                    </Grid>
                </ButtonGroup>
            </div>
            )
        })
}

export const Question3 = props => {
    if (props.step !== 3) return null
        return props.quesArr3.map((quesOpt, index) => {
            let [ques, opt] = quesOpt;
            let quesNum = ques.num;
            let quesText = ques.text;
            return (
                <div className={classes.questionBox} key={index}>
                    <div className={classes.Question}>
                        {quesText}
                    </div>
                    <ButtonGroup variant='outlined' aria-label='options button group' className={classes.Options}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2}}>
                        <Options 
                            ques={quesNum} 
                            options={opt} 
                            clicked={props.radioClick}
                        />
                        </Grid>
                        </ButtonGroup>
                    </div>
            )
        })
}
