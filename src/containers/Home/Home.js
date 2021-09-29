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
            <h1>Welcome to RadioFighters!</h1>
            <div className='mainSection'>
                <p>This is  a trivia game to test your knowledge of your favourite band.</p>
                <p>Click play to get started!</p>
                <Button variant='contained' onClick={navigatePlay}>Play</Button>
            </div>
        </div>
    )
}

export default connect()(Home);