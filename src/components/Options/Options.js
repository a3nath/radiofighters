import React from 'react';

import classes from './Options.module.css';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Options = props => { 
    return props.options.map((option,index) => {
        return (
            <Grid item key={index} xs={12} md={6} className={classes.OptionGrid}>
                <Button variant='outlined' data-tag={option.num} value={option.value} onClick={props.clicked} className={classes.Option}>
                    {option.value}
                </Button>
            </Grid>
        )}  
)};

export default Options;

