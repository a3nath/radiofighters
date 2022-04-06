import {React, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Button from '@mui/material/Button';

import classes from './Home.module.css';
import '../../App.css';

const Home = props => {

    const navigatePlay = () => {
        props.history.replace('/game')
    }


    return (
        <div className={classes.Home}>
            <div className={classes.Header}>
                <h1>RadioFighters</h1>
            </div>
            <div className={classes.Start}>
                <h3>This trivia game tests your knowledge of iconic bands.</h3>
                <h4>Click play to get started!</h4>
                <Button variant='contained' onClick={navigatePlay}>Play</Button>
            </div>
        </div>
    )
}

export default connect()(Home);